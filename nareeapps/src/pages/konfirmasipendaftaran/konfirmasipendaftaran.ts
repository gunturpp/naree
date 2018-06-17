import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PembayaranPage } from '../pembayaran/pembayaran';
import { InvoicePage } from '../invoice/invoice';

/**
 * Generated class for the KonfirmasipendaftaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-konfirmasipendaftaran',
  templateUrl: 'konfirmasipendaftaran.html',
})
export class KonfirmasipendaftaranPage {

  shadowPayment: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.shadowPayment = this.navParams.get("shadowPayment");
    console.log('load KonfirmasipendaftaranPage', this.shadowPayment);
  }
  next(){
    this.navCtrl.push(InvoicePage);
  }
}
