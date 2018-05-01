import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the TambaheventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahevent',
  templateUrl: 'tambahevent.html',
})
export class TambaheventPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   public viewCtrl:ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambaheventPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
