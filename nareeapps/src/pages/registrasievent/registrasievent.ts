import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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
  ticketStatus = [];
  tipetiket = [];
  tickets: any;
  apiTicket = "https://nareeapp.com/api/get-tickettype/"; // + id_event
  categories= [];
  allTicket:any;
  ticketA: any;
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.isChecked = false;
    // all categories by event
    this.event = this.navParams.get("event");
    this.categories = this.navParams.get("categories");
    console.log("category by id event : ", this.categories);
    for (var i = 0; i < this.categories.length; i++) {
      this.categories[i].checklist = false;
    }
    for (let i = 0; i < this.categories.length; i++) {
      this.getApiTicket(this.categories[i].id).then(data => {
        for(var z=0; z<3;z++) {
        data[z].checklist = false;
          
        }
        this.tipetiket[i] = data;
        this.ticketStatus[i] = false;
        // this.tipetiket[i].checklist = false;
        // this.ticketA.push(this.tipetiket[i]);
        // set status tiket all uncheck by array
      });
    }
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
  checklist(signTicket, i, price) {
    for(var z=0; z<this.tipetiket.length;z++){
      this.tipetiket[z].checklist = this.ticketStatus[i];
    }
    for (var y = 0; y < this.categories.length; y++) {
      if (
        this.tipetiket[i].id_category == this.categories[y].id &&
        this.tipetiket[i].checklist == true
      ) {
        this.categories[y].checklist = true;
      }
      if (
        this.tipetiket[i].id_category == this.categories[y].id &&
        this.tipetiket[i].checklist == false
      ) {
        this.categories[y].checklist = false;
      }
    }
    console.log("checklist?:", signTicket + this.ticketStatus[i] + price);
    if (this.ticketStatus[i] == true) {
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
  next() {
    console.log("total biaya : ", this.ticketStatus);
    this.navCtrl.push(DatapesertaPage, {
      biayaTotal: this.totalPrice,
      categories: this.categories,
      tipetiket: this.tipetiket,
      event: this.event
    });
  }
}
