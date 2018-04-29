import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {IonicPage, NavController, NavParams, LoadingController, ToastController, Header,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  success=[];
  x=[];
  messages: any;
  emailuser:any;
  masukan:any;
  password:any;
  repassword:any;
  code:any;
  findemail:boolean=true;
  newPassword:boolean=false;
  constructor( public http: Http,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
    
  }
  save(){
    let loading = this.loadCtrl.create({
      content: 'Tunggu sebentar...'
    });
    var contentHeader = new Headers();
    contentHeader.append('Accept', 'application/json');
    loading.present();
    let input = {
      email:this.emailuser,
      password:this.password,
      password_confirmation:this.repassword,
      token:this.code
    };
    console.log("isi dari input",input);
    this.http.post("https://nareeapp.com/api/password/reset",input,{headers:contentHeader}).subscribe((data) => {
      this.messages = data;
      console.log("invalid doang",this.messages._body.split("invalid.\""));
      console.log("reset doang",this.messages._body.split("reset!"));
      console.log("masukan:",this.messages._body);
      loading.dismiss();
      this.x =  this.messages._body.split("invalid.\"");
      this.success =  this.messages._body.split("reset!");
      if (this.x[1]== "}") {
        console.log("respone di save: ",this.messages);
          this.showError('Your password has been invalid!');
      }
      if (this.success[1] == "\"}") {
        console.log("respone di save: ",this.messages);
          this.showAlert('Your password has been reset!');
          this.navCtrl.setRoot(LoginPage);
      }
    },
      err => {
        loading.dismiss();
        if (err.status == 422) {
          this.showError('The password confirmation does not match.');}
        console.log('eerrror', err);
      }
  
        // this.navCtrl.setRoot();        
   
      // this.showAlert("Pendaftaran Berhasil");
    
    );}
    
  
 forgot(){
  let loading = this.loadCtrl.create({
    content: 'Tunggu sebentar...'
  });
  var contentHeader = new Headers();
  contentHeader.append('Accept', 'application/json');
  loading.present();
  console.log("email: ",this.emailuser);
  let masuk = {
    email:this.emailuser
  };

  console.log("isi dari input",masuk);
  this.http.post("https://nareeapp.com/api/password/email",masuk,{headers:contentHeader}).subscribe((result) => {
    let response = result;
    console.log("masukan:",response);
    loading.dismiss();
    if (response.status == 200) {
      this.findemail=false;
      this.newPassword=true;
        this.showAlert('Please check your email for a message with your code');
    }},
    (err) => {
      loading.dismiss();
      if (err.status == 400) {
          this.showError('We cant find a user with that e-mail address');}
          if (err.status == 422) {
            this.showError('The email must be a valid email address');}

      console.log('eerrror', err._body);
    }

      // this.navCtrl.setRoot();        
 
    // this.showAlert("Pendaftaran Berhasil");
  
  );
 }
 showAlert(val) {
  let alert = this.alertCtrl.create({
    title: 'Success',
    subTitle: val,
    buttons: ['OK']
  });
  alert.present();
}
showError(err) {
  
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: err,
      buttons: ['OK']
    });
    alert.present();
  }
  backto(){
    this.navCtrl.pop();
  }
// showError() {
//   err.status == 0
//     ? this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda")
//     : this.showAlert("Email atau password salah");
// }
}
