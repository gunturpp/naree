import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';

let getApiNews = "http://127.0.0.1:8000/api/get-news";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: string;
  news: any;

  constructor(private http:Http, public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    this.http.get(getApiNews).subscribe(newss =>{
      let response = newss.json();
      this.news =  response.news;
      console.log("news" + response.news);
    })
    this.profile = localStorage.getItem('currentUser');
    console.log("curr", localStorage.getItem('currentUser'));
    console.log("cu", this.profile);
  }

}
