import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ShoweventPage } from "../showevent/showevent";
/**
 * Generated class for the CheckinEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin-event',
  templateUrl: 'checkin-event.html',
})
export class CheckinEventPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinEventPage');
  }
  back(){
    this.navCtrl.popToRoot();
  }
  
}
