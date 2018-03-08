import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { PengaturanPage } from '../pengaturan/pengaturan';
import { AboutusPage } from '../aboutus/aboutus';
import { ContactusPage } from '../contactus/contactus';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  openEditProfile(){
    this.navCtrl.push(EditprofilePage)
  }
  openPengaturan(){
    this.navCtrl.push(PengaturanPage)
  }
  openAboutus(){
    this.navCtrl.push(AboutusPage)
  }
  openContactus(){
    this.navCtrl.push(ContactusPage)
  }
}
