import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
let getApiNews = "http://nareeapp.com/api/get-news";
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

    postId: number;
    token: string;
    profile: string;
    news: any;
    datanews: any;
   data: any;
   judul : any;
   tgl : any;
   isi : any;
   foto : any;
  constructor(private http:Http,public navCtrl: NavController,public viewCtrl : ViewController,public navParams : NavParams) {
  }

  ionViewDidLoad() {
    
    
    this.data = this.navParams.get('newss');
    this.judul = this.data.judul_news;
    this.isi = this.data.description;
    this.foto = this.data.image;
    this.tgl = this.data.updated_at;
    console.log(this.data);
    
  }
  closeModal(){
    this.viewCtrl.dismiss();
   }

}
