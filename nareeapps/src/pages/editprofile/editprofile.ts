import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {   LoadingController, ToastController, AlertController,  ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IonicPage } from 'ionic-angular';
import{ ProfilePage }from '../profile/profile';
import { AchievementPage } from '../achievement/achievement';

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
  image: string;
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
    this.http.get("https://nareeapp.com/api/users/"+this.profiles.id +"/edit").subscribe( userss => {
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
      console.log("user profile" ,this.user);
      if(response.status=="200"){
        this.users= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
    // console.log(this.profiles);
  }
    
  ionViewWillEnter(){

  }
  achievment(){
    this.navCtrl.push(AchievementPage);
  }
  editProfil()
  {
    let loading = this.loadCtrl.create({
        content: 'menyimpan..'
    });
    loading.present();
    let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let masuk = ({
        name:this.nama,
        email:this.email,
        username:this.usrname,
        gender:this.gender,
        birthdate:this.tgl,
        no_hp :this.hp,
        about_me:this.about,
        dance_type:this.kategori,
      });
        this.http.put("https://nareeapp.com/api/users/"+this.profiles.id +"/update",masuk).subscribe(user => {
        let response = user.text;
        console.log(response);
        let ubah = ({
          id: this.profiles.id,
          name:this.nama,
          email:this.profiles.email,
          username:this.profiles.username,
          gender:this.gender,
          birthdate:this.tgl,
          occupation: this.profiles.occupation,
          photo:this.profiles.photo,
          no_hp :this.hp,
          about_me:this.about,
          team: this.profiles.team,
          exp: this.profiles.exp,
          dance_type:this.kategori,
          level: this.profiles.level,
        });
          localStorage.setItem("currentUser",JSON.stringify(ubah));
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
      this.navCtrl.setRoot(ProfilePage);
  }
}