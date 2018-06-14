import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatapesertaPage } from '../datapeserta/datapeserta';

/**
 * Generated class for the RegistrasieventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrasievent',
  templateUrl: 'registrasievent.html',
})
export class RegistrasieventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrasieventPage');
  }
  next(){
    this.navCtrl.push(DatapesertaPage);
  }
}
