import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PembayaranPage } from "../pembayaran/pembayaran";
import { InvoicePage } from "../invoice/invoice";
import { Http } from '@angular/http';

@IonicPage()
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
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.shadowPayment = this.navParams.get("shadowPayment");
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.name_member = this.shadowPayment.name_member;
    this.categories = this.shadowPayment.categories
    console.log("load KonfirmasipendaftaranPage", this.name_member);
  }

  registrationNow() {
    this.name_member[0] = this.shadowPayment.username
    let input = ({
      id_user: this.currentUser.id,
      id_event: this.shadowPayment.id_event,
      status: 'waiting',
      details: JSON.stringify(this.shadowPayment.username+ "| member: "+ this.name_member.username),
      total_price: this.shadowPayment.totalBiaya,
    });
    console.log("newinput", input);
    this.http.post(this.apiPayment, input).subscribe(data => {
      console.log("response", data);
    }, err => {
     "error"
    });

    this.navCtrl.push(InvoicePage, {});
  }
}
