import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

import { Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  token: any;
  statusnya: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  public loginState = false;

  user: { email?: string, password?: string } = {};
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public storage: Storage,
    public http: Http) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin() {
    //this.submitted = true;
    this.submitted = true;
    let loading = this.loadCtrl.create({
      content: 'Tunggu sebentar...'
    });

    // if (form.valid) {
    loading.present();

    // let input = JSON.stringify({
    //   email: "mobile2@gmail.com",
    //   password: "11111111",
    //   c_password: "11111111",
    //   name: "onMobile2"

    // });

    let input = ({
      email: this.user.email,
      password: this.user.password
    });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.storage.set('password', this.user.password);
    this.storage.set('email', this.user.email);
    console.log(this.user.password);
    this.http.post("http://localhost:8000/api/login", input).subscribe(data => {

      this.storage.set(this.HAS_LOGGED_IN, true);
      this.loginState = true;

      let response = data.json();
      console.log(response);
      this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });
      loading.dismiss();
      this.showAlert("Login Berhasil!!");
      if (response.status == 200) {
        let user = response.data;
        //this.userDataProvider.login(user.id,user.username, user.nama, user.email, user.hp, user.kelamin);
        console.log(user);

        this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });

        // if(response.data.user_status =="customer"){
        //  this.navCtrl.push(TabsCustomer);
        // }
        // else{
        //   this.navCtrl.push(TabsPage);
        //}


      } else {
        this.showAlert(response.message);
      }
    }, err => {
      loading.dismiss();
      this.showError(err);
    });
  }

  showError(err: any) {
    err.status == 0 ?
      this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda") :
      this.showAlert("Password salah, mohon coba lagi");
  }
  showAlert(val) {
    let toast = this.toastCtrl.create({
      message: val,
      duration: 3000
    });
    toast.present();
  };
  forgotPassword(){
    console.log("forgot password");
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}