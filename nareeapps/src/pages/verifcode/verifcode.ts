import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';


// @IonicPage()
@Component({
  selector: 'page-verifcode',
  templateUrl: 'verifcode.html',
})
export class VerifcodePage {

  HAS_LOGGED_IN = 'hasLoggedIn';
  public loginState = false;
  user: { otpstr?: string, digit?: string } = {};
  submitted: any;
  constructor(public storage: Storage, public http: Http, public loadCtrl: LoadingController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
  // putSomething() {
  //   let json = JSON.stringify({ digit: '6', phoneNum: "081213638004" });
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.put('https://api.mainapi.net/smsotp/1.0.1/otp/key11', json, { headers: headers });
  // }
  // details() {
  //   return new Promise((resolve, reject) => {
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //     headers.append('Authorization', "Bearer 04ba3bde8993265c9fe4c1dfd12442aa");
  //     this.http.post('https://api.mainapi.net/smsnotification/1.0.0/messages', {}, { headers: headers })
  //       .subscribe(res => {
  //         resolve(res.json());
  //       },
  //       (err) => { reject(err); });
  //   });
  // }
  onLogin() {
    //this.submitted = true;
    this.submitted = true;
    let loading = this.loadCtrl.create({
      content: 'Tunggu sebentar...'
    });
    loading.present();
    let input = ({
      digit: this.user.digit = "4",
      otpstr: this.user.otpstr //codeVerification
    });
    
    let headers = new Headers({
      'Authorization': "Bearer 947db189cbc68620946b5e622c1ec901",

      "Content-Type": "application/json"        
    });
    let options = new RequestOptions({ headers: headers });

    this.http.put("https://api.mainapi.net/smsotp/1.0.1/otp/key11/verifications", input, options).subscribe(data => {


      let response = data.json();
      console.log(response);
      loading.dismiss();
      this.showAlert("Verifikasi berhasil");
      if (response.status == 200) {
        this.navCtrl.push(VerifcodePage);
        let user = response.data;
        console.log(user);
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
      this.showAlert("PW salah, mohon coba lagi");
  }
  showAlert(val) {
    let toast = this.toastCtrl.create({
      message: val,
      duration: 3000
    });
    toast.present();
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad TesapiPage');
  }

}
