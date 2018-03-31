import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import { MorePage } from '../more/more';
import { Camera,CameraOptions } from '@ionic-native/camera';
// let getApiEvent = "http://127.0.0.1:8000/api/get-users";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profil: string;
  profiles: any;
  profile: any;
  validFoto = false;
  image : string;
  // private camera: Camera,
  constructor(private http:Http,public navCtrl: NavController) {
    this.profiles = JSON.parse(localStorage.getItem('currentUser'));
    // this.profile = JSON.stringify(this.profiles.currentuser);
    // this.profil = JSON.parse(this.profile);
  }
  ionViewDidLoad() {
    console.log(this.profiles);
  //   manggil semua user
  //   this.http.get(getApiEvent).subscribe(users =>{
  //     let response = users.json();
  //     this.userss = response.users;
  //     console.log(this.userss);
  //   })
  }
  ionViewWillEnter(){
  
    this.profiles = JSON.parse(localStorage.getItem('currentUser'));
  }
  gotoNextPage(){
    this.navCtrl.push(MorePage)
  }
  
  getPhotoFromGallery(){
  // this.camera.getPicture({
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
  //       targetWidth: 600,
  //       targetHeight: 600
  // }
  // ).then((imageData) => {
  //  // imageData is either a base64 encoded string or a file URI
  //  // If it's base64:
  //  let base64Image = 'data:image/jpeg;base64,' + imageData;
  //  this.image = base64Image;
  //  console.log(this.image);
  // }, (err) => {
  //  // Handle error
  // });
}
}
