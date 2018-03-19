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
//   editdata(){

//     let loading = this.loadCtrl.create({
//       content: 'Tunggu sebentar...'
//   });
  
//     loading.present();
//     let input = JSON.stringify({

//       name:this.nama,
//       dance_type:this.kategori,
//       birthdate:this.tgl,
//       gender:this.gender,
//       email:this.email,
//       //  hp:any;
//        about_me: this.about,
      
//     });
//     this.http.post("http://127.0.0.1:8000/api/get-users?id=" + this.iduser,input)
//     .subscribe(data => {
//         console.log(data.json);
//         //  let response = data.json();
//         //  if(response.status == 200){
//         //    loading.dismiss();
//         //    let user=response.data;
//         //   // this.userDataProvider.login(user.id,user.username,user.status);
//         //   //  this.navCtrl.setRoot(LocationSelect);
//         //  }
//          loading.dismiss()
//         //  this.showAlert("Data Has Been Updated");
//          this.navCtrl.setRoot(MorePage,{},{animate:true, direction:'forward'});
// }, err => {
// loading.dismiss();
// // this.showError(err);
// });
//    }
}
