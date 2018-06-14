import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KonfirmasipendaftaranPage } from '../konfirmasipendaftaran/konfirmasipendaftaran';

/**
 * Generated class for the DatapesertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datapeserta',
  templateUrl: 'datapeserta.html',
})
export class DatapesertaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatapesertaPage');
  }
  next(){
    this.navCtrl.push(KonfirmasipendaftaranPage);
  }
}
