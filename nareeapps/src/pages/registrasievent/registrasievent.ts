import { Component } from "@angular/core";
import { LoadingController, NavController, NavParams, } from "ionic-angular";
import { DatapesertaPage } from "../datapeserta/datapeserta";
import { Http, RequestOptions, Headers } from "@angular/http";

/**
 * Generated class for the RegistrasieventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-registrasievent",
  templateUrl: "registrasievent.html"
})
export class RegistrasieventPage {
  enable: boolean = false;
  event: any;
  isChecked: boolean;
  totalPrice = 0;
  tipe = [];
  myDate: String = new Date().toISOString();
  hari:any;
  ticketStatus = [];
  tipetiket = [];
  tickets: any;
  apiTicket = "https://nareeapp.com/api/get-tickettype/"; // + id_event
  categories= [];
  kater=[];
  data:any;
  allTicket:any;
  ticketA: any;
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadCtrl: LoadingController,
  ) {}
 
  ionViewDidLoad() {
        let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
    this.isChecked = false;
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    // all categories by event
    this.event = this.navParams.get("event");
    this.categories = this.navParams.get("categories");
    console.log("category by id event : ", this.categories);
    for (var i = 0; i < this.categories.length; i++) {
      this.categories[i].checklist = false;
    }

    for (let i = 0; i < this.categories.length; i++) {
      this.getApiTicket(this.categories[i].id).then(data => {
    // console.log("ada isi",this.categories[i].id);
    // console.log("ada isi",data.length);
        this.data= data;
        for(var z=0; z<this.data.length;z++) {
        data[z].checklist = false;
        }
        this.tipetiket[i] = data;
        console.log("ada isi", this.tipetiket[i]);
        this.ticketStatus[i] = false;
        // this.tipetiket[i].checklist = false;
        // this.ticketA.push(this.tipetiket[i]);
        // set status tiket all uncheck by array
      });
      this.myDate=new Date().toISOString();
      this.hari = this.myDate.split("T")[0];
    console.log("hari ini",this.hari);
    }
    loading.dismiss();
    console.log("tipetikettzzz: ", this.tipetiket);
    // tipe 1
    // tipe 2
    // tipe 3
    // this.ticketArray();
  }
  // ticketArray() {
  //   this.allTicket = this.tipetiket;
  //   for (let j = 0; j < this.allTicket.length; j++) {
  //     this.ticketStatus[j] = false;
  //     this.allTicket[j].checklist = false;
  //   }
  //   console.log("all tiket", this.allTicket);
  // }
  getApiTicket(id) {
    // id category
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.get(this.apiTicket + id, options).subscribe(tickets => {
        this.tickets = tickets.json();
        resolve(this.tickets.tickets);
      });
    });
  }
  checklist(kategori, signTicket, j,i, price) {
    // for(var z=0; z<this.tipetiket.length;z++){
    //   this.tipetiket[z].checklist = this.ticketStatus[j][i];
    // }
    // for (var y = 0; y < this.categories.length; y++) {
    //   if (
    //     this.tipetiket[i].id_category == this.categories[y].id &&
    //     this.tipetiket[i].checklist == true
    //   ) {
    //     this.categories[y].checklist = true;
    //     kategori=this.categories[y].category;
    //   }
    //   if (
    //     this.tipetiket[i].id_category == this.categories[y].id &&
    //     this.tipetiket[i].checklist == false
    //   ) {
    //     this.categories[y].checklist = false;
    //   }
    // }

    if(this.tipetiket[j][i].checklist==true)
    {this.tipetiket[j][i].checklist=false;
      
    }
    else {
      this.tipetiket[j][i].checklist=true;
      
    }
    console.log("isi dari kategori",this.kater); 
    console.log("checklist?:", kategori+ signTicket + this.ticketStatus[i] + price +this.tipetiket[0][0].checklist);
    if (this.tipetiket[j][i].checklist == true) {
      this.totalPrice += parseInt(price);
      this.enable = true;
    } else {
      this.totalPrice -= parseInt(price);
    }
    if (this.totalPrice == 0) {
      this.enable = false;
    }
    console.log("total biaya : ", this.totalPrice);
  }
  balik(){
    this.navCtrl.pop();
      let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'flex';
      });
  }
  }
  next() {
    var z=0;
    this.tipe=[];
    for(var j=0; j<this.tipetiket.length;j++){
      for(var i=0; i<this.tipetiket[j].length;i++){
        if(this.tipetiket[j][i].checklist == true){
          this.tipe[z]={ tipe:this.tipetiket[j][i].type ,
          kater:this.tipetiket[j][i].id_category};
          z++;
          console.log("tipe tiket:",this.tipetiket[j][i].type);
    //       // this.tipe[this.z].kategori=this.shadowPayment.tipetiket[j][i].type;

        }
       }
    }
    for(var j=0; j<this.categories.length;j++){
      for(var i=0; i<this.tipe.length;i++){
          if(this.categories[j].id==this.tipe[i].kater){
          this.tipe[i].kater = this.categories[j].category;
          this.tipe[i].min = this.categories[j].min_person;
          this.tipe[i].max = this.categories[j].max_person;}
      }
    }
    console.log("tipe tiket:",this.tipe);
    this.navCtrl.push(DatapesertaPage, {
      biayaTotal: this.totalPrice,
      categories: this.categories,
      tipetiket: this.tipetiket,
      event: this.event,
      tipe : this.tipe
    });
  }
}
