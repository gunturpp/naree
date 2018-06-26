import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams,ModalController } from 'ionic-angular';
import { RewardPage } from "../reward/reward"; 
// import {HomePage } from "../home/home";
import { TabsPage } from '../tabs/tabs';
import { Http, Headers, RequestOptions } from "@angular/http";
/**
 * Generated class for the CheckinDailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-checkin-daily',
  templateUrl: 'checkin-daily.html',
})
export class CheckinDailyPage {


  riwayat: any=[];
  profiles: any;
  history: any=[];
  constructor(public navCtrl: NavController,
    public http: Http,public viewCtrl : ViewController,public modalCtrl: ModalController, public navParams: NavParams) {
      this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinDailyPage');
  }
  // back(){
  //   this.navCtrl.popToRoot();
  // }
  closeModal(){
    this.http.get("https://nareeapp.com/api/get-history").subscribe(histories => {
      let response = histories.json();
      this.history = response.histories;
      console.log("cek API get1",this.history[0].id_user);
      console.log("cek API get2",this.profiles.id);
      for (var i = 0, j = 0; i < this.history.length; i++) {
        if (this.history[i].id_user == this.profiles.id) {
          this.riwayat[j] = this.history[i];
          j++;
        }
      }
      // show popup when levelup
      localStorage.setItem("expHistory",JSON.stringify(this.riwayat));
    });
    this.navCtrl.pop();
   }

}
