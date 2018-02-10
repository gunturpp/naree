import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  resposeData :any;
  userData = {"name":"","email":"","password":"","c_password":"","gender":"male","birthdate":"2017/06/23","occupation":"student"};
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 
  login(){
    //API connection
  this.authServiceProvider.postData(this.userData, "/register").then((result) =>{
 this.resposeData =result;
 console.log(this.resposeData);
 localStorage.setItem('userData',JSON.stringify(this.resposeData))
 this.navCtrl.push(LoginPage);
}, (err)=> {

});
  }
}
