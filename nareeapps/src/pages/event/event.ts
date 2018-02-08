import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EventPage');
  // }
checkups(): string[] {
    return [
      "Region",
      "bar",
      "baz"
    ];
  }

  checkup: string = "Region";

  logChosen(): void {
    console.log(this.checkup);
  }
};
