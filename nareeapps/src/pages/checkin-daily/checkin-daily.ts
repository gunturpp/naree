import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams,ModalController } from 'ionic-angular';
import { RewardPage } from "../reward/reward"; 
// import {HomePage } from "../home/home";
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the CheckinDailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin-daily',
  templateUrl: 'checkin-daily.html',
})
export class CheckinDailyPage {

  constructor(public navCtrl: NavController,public viewCtrl : ViewController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinDailyPage');
  }
  // back(){
  //   this.navCtrl.popToRoot();
  // }
  closeModal(){
    this.navCtrl.push(TabsPage);
   }
}
