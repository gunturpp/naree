import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { PengaturanPage } from '../pengaturan/pengaturan';
import { AboutusPage } from '../aboutus/aboutus';
import { ContactusPage } from '../contactus/contactus';
import { Storage } from "@ionic/storage";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
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
    this.storage.remove('eventcheckin');
    this.storage.remove('checkhari');
    if(localStorage.getItem('token') == null ) {
      this.navCtrl.parent.parent.setRoot(LoginPage);
      // this.navCtrl.popToRoot();
      // window.location.reload();
    }
  }
}
