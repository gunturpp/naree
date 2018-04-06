import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ NewsPage } from '../news/news';
import { IonicPage,ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';
let getApiNews = "http://nareeapp.com/api/get-news";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string;
  profile: string;
  news: any;
  data: any;
  tanggal:any;
  // posts: Observable<Array<Post>>;
  constructor(private http:Http, public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }
  ionViewDidLoad() {
    this.http.get(getApiNews).subscribe(newss =>{
      let response = newss.json();
      this.news = response.news;
      // this.data = this.news[0];
      console.log("news" + JSON.stringify(this.news));
    })
    this.profile = localStorage.getItem('currentUser');
    console.log("current user :",this.profile);
    this.token = localStorage.getItem('token');
    console.log("token :",this.token);
  }
  openModal(newss) {
    const modal = this.modalCtrl.create(NewsPage,{newss});
    modal.present();
    // this.navCtrl.push(NewsPage,newss)
    console.log(newss);
  }
  // navigateToDetail(id: number ){
  //   this.navCtrl.push('NewsPage',{ id })
  // }
}
