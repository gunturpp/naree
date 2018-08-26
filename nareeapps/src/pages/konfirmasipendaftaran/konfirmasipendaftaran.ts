import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,ModalController
} from "ionic-angular";
import { PembayaranPage } from "../pembayaran/pembayaran";
import { InvoicePage } from "../invoice/invoice";
import { Http, RequestOptions, Headers } from "@angular/http";

// @IonicPage()
@Component({
  selector: "page-konfirmasipendaftaran",
  templateUrl: "konfirmasipendaftaran.html"
})
export class KonfirmasipendaftaranPage {
  currentUser: any;
  apiPayment = "https://nareeapp.com/api/post-payment";
  name_member: any;
  tipe = [];
  // z:any;
  categories: any;
  // detail:any;
  // public detail:Array<string>=[null];
  detail: {kategori?:any; team?:string;member?:any;}={};
  shadowPayment: any;
  details: any;
  kategori: any;
  team: any;
  liat_hasil: any;
  constructor(
    public alertCtrl: AlertController,
    private http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.shadowPayment = this.navParams.get("shadowPayment");
    // this.shadowPayment = this.navParams.get("tipe");

   var z=0;
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // this.name_member = this.shadowPayment.name_member;
    // this.categories = this.shadowPayment.categories;
    // console.log("load KonfirmasipendaftaranPage", this.shadowPayment);
    // console.log("load KonfirmasipendaftaranPage1", JSON.stringify(this.shadowPayment));
  }

  confirmRegistration() {
    for(var j=0; j<this.shadowPayment.tipe.length;j++){
      this.detail.kategori =this.shadowPayment.tipe;
      this.detail.team =this.shadowPayment.team;
      this.detail.member=this.shadowPayment.name_member;
    }
    console.log("detail:",this.detail);
    const alert = this.alertCtrl.create({
      title: "Konfirmasi",
      message: "Pastikan data yang tertera sudah benar. Anda tidak bisa mengubah detail pendaftaran setelah konfirmasi.",
      buttons: [
        {
          text: "Tidak",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Ya",
          handler: () => {
           this.registrationNow();
          }
        }
      ]
    });
    alert.onDidDismiss(() => console.log("Alert was dismissed by the user"));
    alert.present();
  }

  registrationNow() {
    // this.name_member[0] = this.shadowPayment.username;
    let input = {
      id_user: this.currentUser.id,
      id_event: this.shadowPayment.id_event,
      status: "waiting",
      details: JSON.stringify(this.detail),
      total_price: this.shadowPayment.totalBiaya
    };
    console.log("newinput", input);
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.apiPayment, input, options).subscribe(
      data => {
        this.liat_hasil =data.json();
        this.liat_hasil =this.liat_hasil.success;
        console.log("response", this.liat_hasil);
        this.navCtrl.setRoot(InvoicePage, {
          details: this.liat_hasil,
        });
       
      },
      err => {
        "error";
      }
    );
  let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'flex';
      });

  }
    
  }
}
