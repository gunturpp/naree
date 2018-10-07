import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

  number = 100;
  point=[];
  name=[];
  category=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');
    for(let i=1;i<=this.number;i++) {
      this.name[i] = "Guntur "+ i;
      this.category[i] = "Breakdance " + i;
      this.point[i] = this.number-i;

    }
  }

}
