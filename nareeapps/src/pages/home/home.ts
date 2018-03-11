import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ NewsPage } from '../news/news';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

let getApiNews = "http://127.0.0.1:8000/api/get-news";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string;
  profile: string;
  news: any;
  constructor(private http:Http, public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }
  ionViewDidLoad() {
    this.http.get(getApiNews).subscribe(newss =>{
      let response = newss.json();
      this.news = response.news;
      console.log("news" + JSON.stringify(this.news));
    })
    this.profile = localStorage.getItem('currentUser');
    console.log("current user :",this.profile);
    this.token = localStorage.getItem('token');
    console.log("token :",this.token);
  }
  openModal() {
    const modal = this.modalCtrl.create(NewsPage);
    modal.present();
  }
}
