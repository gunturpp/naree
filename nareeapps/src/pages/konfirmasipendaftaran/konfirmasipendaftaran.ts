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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasipendaftaranPage');
  }
  next(){
    this.navCtrl.push(InvoicePage);
  }
}
