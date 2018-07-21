import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
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
  categories: any;
  shadowPayment: any;
  constructor(
    public alertCtrl: AlertController,
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.shadowPayment = this.navParams.get("shadowPayment");
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.name_member = this.shadowPayment.name_member;
    this.categories = this.shadowPayment.categories;
    console.log("load KonfirmasipendaftaranPage", this.name_member);
  }

  confirmRegistration() {
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
    this.name_member[0] = this.shadowPayment.username;
    let input = {
      id_user: this.currentUser.id,
      id_event: this.shadowPayment.id_event,
      status: "waiting",
      details: JSON.stringify(
        this.shadowPayment.username + "| member: " + this.name_member.username
      ),
      total_price: this.shadowPayment.totalBiaya
    };
    console.log("newinput", input);
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.apiPayment, input, options).subscribe(
      data => {
        console.log("response", data);
      },
      err => {
        "error";
      }
    );

    this.navCtrl.push(InvoicePage, {});
  }
}
