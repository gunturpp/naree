import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ShoweventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-showevent',
  templateUrl: 'showevent.html',
})
export class ShoweventPage {

  constructor(public navCtrl: NavController,public viewCtrl : ViewController ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoweventPage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
   }
}
