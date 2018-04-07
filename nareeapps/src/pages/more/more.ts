import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { PengaturanPage } from '../pengaturan/pengaturan';
import { AboutusPage } from '../aboutus/aboutus';
import { ContactusPage } from '../contactus/contactus';
import { Http, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  token: any;

  constructor(public authServiceProvider: AuthServiceProvider , public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  openEditProfile(){
    this.navCtrl.push(EditprofilePage);
  }
  openPengaturan(){
    this.navCtrl.push(PengaturanPage);
  }
  openAboutus(){
    this.navCtrl.push(AboutusPage);
  }
  openContactus(){
    this.navCtrl.push(ContactusPage);
  }
  signOut(){
    this.authServiceProvider.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    if(localStorage.getItem('token') == null ) {
      this.navCtrl.setRoot (LoginPage);
    }
  }
}
