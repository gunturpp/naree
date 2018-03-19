import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { CheckinDailyPage } from '../checkin-daily/checkin-daily';
/**
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
  pet: string = "level";
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }
  // checkin() {
  //   this.navCtrl.push(CheckinDailyPage);
  // }
  openModal() {
    const modal = this.modalCtrl.create(CheckinDailyPage);
    modal.present();
  }
}
