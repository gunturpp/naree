import { Component } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController,
  ViewController
} from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";

import { Http, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  token: any;
  statusnya: any;
  HAS_LOGGED_IN = "hasLoggedIn";
  public loginState = false;

  user: { email?: string; password?: string } = {};
  submitted = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public loadCtrl: LoadingController,public storage: Storage,public http: Http,public viewCtrl: ViewController)
  {
    if(localStorage.getItem("token") != null){
      this.navCtrl.push(TabsPage);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  onLogin(form: NgForm) {
    // kondisi submit true
    this.submitted = true;
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });

    if (form.valid) {
      loading.present();
      let contentheaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
      let input = {
        email: this.user.email,
        password: this.user.password
      };
      this.storage.set("password", this.user.password);
      this.storage.set("email", this.user.email);
      // console.log(this.user.password);
<<<<<<< HEAD
      this.http.post("http://127.0.0.1:8000/api/login", input).subscribe(data => {
=======
      this.http.post("http://localhost:8100/api/login", input,headers).subscribe(data => {
>>>>>>> b7229bec0bddaf8ac795a2ee379a344ebd0537ea
            let response = data.json();
            loading.dismiss();
            // login berhasil
            if (response.status == 200) {
              // save profile in localstorage   
              localStorage.setItem("currentUser",JSON.stringify(response.currentuser));
              // save token in localstorage   
              localStorage.setItem("token",JSON.stringify(response.token));
              this.navCtrl.setRoot(TabsPage);
              // this.viewCtrl.dismiss(); 
            } else {
              // this.showAlert(response.message);
              // console.log(response.message);
              console.log("password salah");
            }
          },
          err => {
            loading.dismiss();
            this.showError(err);
            console.log('eerrror', err);
          }
        );
    }
  }

  showError(err: any) {
    err.status == 0
      ? this.showAlert(
          "Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"
        )
      : this.showAlert("Email atau password salah");
  }
  showAlert(val) {
    let toast = this.toastCtrl.create({
      message: val,
      duration: 3000
    });
    toast.present();
  }
  forgotPassword() {
    console.log("forgot password");
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}
