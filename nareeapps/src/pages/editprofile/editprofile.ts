import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import { MorePage } from '../more/more';
import {  NavParams, LoadingController, ToastController, AlertController,  ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  profiles: any;
  resposeData: any;
  submitted: any;
  iduser:any;
  nama:any;
  kategori:any;
  tgl:any;
  gender:any;
  email:any;
  hp:any;
  about:any;
  achiev:any;
  user: { name?: string, email?: string, password?: string, gender?: string, birthdate?: string, occupation?: string } = {};
  c_password: string;
  constructor(public http: Http,
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController) {
    this.profiles = JSON.parse(localStorage.getItem('currentUser'));
  }
  ionViewDidLoad() {
    console.log(this.profiles);
  }
  // editProfil()
  // {
  //   let loading = this.loadCtrl.create({
  //       content: 'menyimpan..'
  //   });
  //   loading.present();
  //     let input = JSON.stringify({
  //       name:this.nama,
  //       dance_type:this.kategori,
  //       birthdate:this.tgl,
  //       gender:this.gender,
  //       email:this.email,
  //       // :this.hp,
  //       about_me:this.about,
  //       // :this.achiev,

  //     });
  //       this.http.post(this.data.BASE_URL+"/edit_profile_doctor.php?doctor="+this.id_doctor,input).subscribe(data => {
  //       let response = data.json();
  //       // console.log(response);
  //       this.http.post("http://127.0.0.1:8000/api/login", input).subscribe(data => {
  //           let response = data.json();
	//   if(response.status=="200"){

       
  //      // this.data.login(response.data);
  //         loading.dismiss();
  //         this.data.login(response.data,"dokter");
  //         // this.navCtrl.push(ProfilPasien);
  //         let alert = this.alertCtrl.create({
  //         title: 'Data Tersimpan!',
  //         subTitle: 'Lakukan refresh dengan cara menarik halaman kebawah',
  //         buttons: ['OK']
  //         });
  //         alert.present();
  //     }
  //     else
  //          {
  //            loading.dismiss();
  //            let alert = this.alertCtrl.create({
  //               title: 'Gagal Mengubah Profil',
  //               subTitle: '',      
  //               buttons: ['OK']
  //             });
  //             alert.present();
  //          }

  //     });
    
  // }
}
