import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import { MorePage } from '../more/more';
// let getApiEvent = "http://127.0.0.1:8000/api/get-users";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profil: string;
  profiles: any;
  profile: any;
  constructor(private http:Http,public navCtrl: NavController) {
    // this.profiles = JSON.parse(localStorage.getItem('currentUser'));
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
  gotoNextPage(){
    this.navCtrl.push(MorePage)
  }
}
