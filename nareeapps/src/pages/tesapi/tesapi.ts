import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

let mytoken = "04ba3bde8993265c9fe4c1dfd12442aa";

// @IonicPage()
@Component({
  selector: 'page-tesapi',
  templateUrl: 'tesapi.html',
})
export class TesapiPage {

  HAS_LOGGED_IN = 'hasLoggedIn';
  public loginState = false;
  user: { msisdn?: string, content?: string } = {};
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
      content: this.user.content, // konten pesan
      msisdn: this.user.msisdn // nomer handphone
    });
    
    let headers = new Headers({
      'Authorization': "Bearer 04ba3bde8993265c9fe4c1dfd12442aa",
      "Content-Type": "application/json"        
    });
    let options = new RequestOptions({ headers: headers });

    this.storage.set('msisdn', this.user.msisdn);
    this.storage.set('content', this.user.content);
    console.log(this.user.msisdn);
    console.log(this.user.content);
    this.http.post("http://api.mainapi.net/smsnotification/1.0.0/messages/", input, options).subscribe(data => {


      let response = data.json();
      console.log(response);
      loading.dismiss();
      this.showAlert("Api berhasil");
      if (response.status == 200) {
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
