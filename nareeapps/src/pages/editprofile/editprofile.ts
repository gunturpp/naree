import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import { MorePage } from '../more/more';
import {  NavParams, LoadingController, ToastController, AlertController,  ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';
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
  usrname:any;
  users: any;
  user:any;
  // user: { name?: string, email?: string, password?: string, gender?: string, birthdate?: string, occupation?: string } = {};
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
    this.http.get("http://127.0.0.1:8000/api/users/"+this.profiles.id +"/edit").subscribe( userss => {
      let response = userss.json();
      // let response = userss;
      this.users = response;
      this.user = this.users.currentuser;
      this.nama  = this.user.name;
      this.usrname = this.user.username;
      this.kategori = this.user.dance_type;
      this.tgl = this.user.birthdate;
      this.gender = this.user.gender;
      this.email = this.user.email;
      this.hp = this.user.no_hp;
      this.about = this.user.about_me;
      this.iduser= this.user.id;
      // console.log("ini hasilnya" + JSON.stringify(this.user));
      console.log(this.user);
      if(response.status=="200"){
        this.users= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
    // console.log(this.profiles);
  }
    
 
  editProfil()
  {
    let loading = this.loadCtrl.create({
        content: 'menyimpan..'
    });
    loading.present();
    let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let input = ({
        id:this.iduser,
        name:this.nama,
        username:this.usrname,
        dance_type:this.kategori,
        birthdate:this.tgl,
        gender:this.gender,
        email:this.email,
        no_hp :this.hp,
        about_me:this.about,
        // :this.achiev,

      });
        this.http.put("http://127.0.0.1:8000/api/users/"+this.profiles.id +"/update",input).subscribe(user => {
        let response = user.text;
        localStorage.setItem("currentUser",JSON.stringify(input));
        console.log(response);
        
	  if(response.name =="Selamat, profile berhasil diubah"){
       // this.data.login(response.data);
          loading.dismiss();
          
          // this.navCtrl.push(ProfilPasien);
          let alert = this.alertCtrl.create({
          title: 'Data Tersimpan!',
          subTitle: 'Lakukan refresh dengan cara menarik halaman kebawah',
          buttons: ['OK']
          });
          alert.present();
      }   
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Data Tersimpan!',
                subTitle: '',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
      this.navCtrl.push(MorePage);
  }
}
