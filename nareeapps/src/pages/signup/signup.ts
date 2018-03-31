import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NgForm } from '@angular/forms';
import { Http, RequestOptionsArgs } from '@angular/http';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  resposeData: any;
  submitted: any;
  user: { name?: string, email?: string,username?: string, password?: string, gender?: string, birthdate?: string, occupation?: string, level?: number } = {};
  c_password: string;
  // userData = { "name": "", "email": "", "password": "", "c_password": "", "gender": "male", "birthdate": "2017/06/23", "occupation": "student" };
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignup(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
      content: 'Tunggu sebentar...'
    });

    if (form.valid) {
      let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

      this.c_password = this.user.password;
      console.log(this.user.name);
      console.log(this.user.email);
      loading.present();
      let input = ({
        name: this.user.name,
        email: this.user.email,
        username: this.user.username,
        password: this.user.password,
        c_password: this.c_password,
        gender: this.user.gender,
        birthdate: this.user.birthdate,
        occupation: this.user.occupation,
        level: this.user.level = 0
        // birthdate: this.user.hp,
        // status: this.user.role="tourist"
      });

      this.http.post("http://127.0.0.1:8000/api/register", input).subscribe(data => {

        // this.storage.set(this.HAS_LOGGED_IN, true); 
        // this.loginState = true;        

        let response = data.json();
        console.log(response);
        this.navCtrl.setRoot(LoginPage, {}, { animate: true, direction: 'forward' });        
        loading.dismiss();
        this.showAlert("Pendaftaran Berhasil");
        if (response.status == 200) {
          let user = response.data;
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







      //           this.http.post("http://127.0.0.1/homeisland/backend/signUpInfo.php",input).subscribe(data => {
      //                loading.dismiss();
      //                let response = data.json();
      //                if(response.status == 200){
      //                  let user=response.data;
      //                 // this.userDataProvider.login(user.id,user.username,user.status);
      //                 //  this.navCtrl.setRoot(LocationSelect);

      //                }
      //                this.showAlert(response.message);
      //                this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:'forward'});
      // }, err => {
      //    loading.dismiss();
      //    this.showError(err);
      // });



    }
  }
  showError(err: any) {
    err.status == 0 ?
      this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda") :
      this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  signup() {

    //API connection
    // this.authServiceProvider.postData(this.userData, "/register").then((result) => {
    //   this.resposeData = result;
    //   console.log(this.resposeData);
    //   localStorage.setItem('userData', JSON.stringify(this.resposeData))
    //   this.navCtrl.push(LoginPage);
    // }, (err) => {

    // });
  }
}
