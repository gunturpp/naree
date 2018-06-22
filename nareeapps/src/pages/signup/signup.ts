import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NgForm } from '@angular/forms';
import { Http, RequestOptionsArgs } from '@angular/http';

import { TabsPage } from '../tabs/tabs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  pesan: any;
  resposeData: any;
  submitted: any;
  user: { name?: string, email?: string,username?: string, password?: string, gender?: string, birthdate?: string, occupation?: string, level?: number ,province?:string; } = {};
  c_password: string;
  ProvinceData: { text: string; value: string; }[];
  province: { text: string; value: string; };
  // userData = { "name": "", "email": "", "password": "", "c_password": "", "gender": "male", "birthdate": "2017/06/23", "occupation": "student" };
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController) {
      this.ProvinceData = [
        { text: 'Aceh', value: 'Aceh' },
        { text: 'Bali', value: 'Bali' },
        { text: 'Banten', value: 'Banten' },
        { text: 'Bengkulu', value: 'Bengkulu' },
        { text: 'Gorontalo', value: 'Gorontalo' },
        { text: 'Jakarta', value: 'Jakarta' },
        { text: 'Jambi', value: 'Jambi' },
        { text: 'Jawa Barat', value: 'Jawa Barat' },
        { text: 'Jawa Tengah', value: 'Jawa Tengah' },
        { text: 'Jawa Timur', value: 'Jawa Timur' },
        { text: 'Kalimantan Barat', value: 'Kalimantan Barat' },
        { text: 'Kalimantan Selatan', value: 'Kalimantan Selatan' },
        { text: 'Kalimantan Tengah', value: 'Kalimantan Tengah' },
        { text: 'Kalimantan Timur', value: 'Kalimantan Timur' },
        { text: 'Kalimantan Utara', value: 'Kalimantan Utara' },
        { text: 'Kepulauan Bangka Belitung', value: 'Kepulauan Bangka Belitung' },
        { text: 'Kepulauan Riau', value: 'Kepulauan Riau' },
        { text: 'Lampung', value: 'Lampung' },
        { text: 'Maluku', value: 'Maluku' },
        { text: 'Maluku Utara', value: 'Maluku Utara' },
        { text: 'Nusa Tenggara Barat', value: 'Nusa Tenggara Barat' },
        { text: 'Nusa Tenggara Timur', value: 'Nusa Tenggara Timur' },
        { text: 'Papua', value: 'Papua' },
        { text: 'Papua Barat', value: 'Papua Barat' },
        { text: 'Riau', value: 'Riau' },
        { text: 'Sulawesi Barat', value: 'Sulawesi Barat' },
        { text: 'Sulawesi Selatan', value: 'Sulawesi Selatan' },
        { text: 'Sulawesi Tengah', value: 'Sulawesi Tengah' },
        { text: 'Sulawesi Tenggara', value: 'Sulawesi Tenggara' },
        { text: 'Sulawesi Utara', value: 'Sulawesi Utara' },
        { text: 'Sumatera Barat', value: 'Sumatera Barat' },
        { text: 'Sumatera Selatan', value: 'Sumatera Selatan' },
        { text: 'Sumatera Utara', value: 'Sumatera Utara' },
        { text: 'Yogyakarta', value: 'Yogyakarta' }
    ];

    // Pre-selected object with different object reference      
    this.province = { text: 'Jakarta', value: 'Jakarta' };
  }
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
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
        level: this.user.level = 1,
        photo: "/images/photoprofile/default.png",
        exp: 0,
        province : this.province.value,
        team : null,
        // birthdate: this.user.hp,
        // status: this.user.role="tourist"
      });

      this.http.post("https://nareeapp.com/api/register", input).subscribe(data => {

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

        } else {
          this.showAlert(response.message);
        }
      }, err => {
        this.pesan = err.json();
        console.log("error nya apa: ",this.pesan.error);
        loading.dismiss();
        this.showError(this.pesan.error.username);
        this.showError(this.pesan.error.email);
        this.showError(this.pesan.error.password);
        this.showError(this.pesan.error.gender);
        this.showError(this.pesan.error.name);
        this.showError(this.pesan.error.birthdate);
      });

    }
  }
  showError(err: any) {
    // err.status == 0 ?
    //   this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda") :
    //   this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
    this.showAlert(err)
  }
  showAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  backgo() {
    this.navCtrl.pop();
  }
}
