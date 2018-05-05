import { Component,ViewChild  } from '@angular/core';
import { NavController, Slide, Slides } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ NewsPage } from '../news/news';
import { IonicPage,ModalController, Platform, NavParams, ViewController ,LoadingController,} from 'ionic-angular';
let getApiNews = "https://nareeapp.com/api/get-news";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pesan: any;
  @ViewChild(Slides) slides: Slides;

  token: string;
  profile: string;
  news: any;
  data: any;
  tanggal:any;
  // posts: Observable<Array<Post>>;
  constructor(private http:Http, public navCtrl: NavController,public modalCtrl: ModalController,private loadCtrl: LoadingController,) {
    
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }
  ionViewDidEnter() {
    this.slides.startAutoplay();
  }
  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    this.http.get(getApiNews).subscribe(newss =>{
      let response = newss.json();
      this.news = response.news;
      // this.data = this.news[0];
      // console.log("news" + JSON.stringify(this.news));
      loading.dismiss();
    });
    this.profile = localStorage.getItem('currentUser');
    // console.log("current user :",this.profile);
    this.token = localStorage.getItem('token');
    // console.log("token :",this.token);
    
  }
  openModal(newss) {
    // const modal = this.modalCtrl.create(NewsPage,{newss});
    this.navCtrl.push(NewsPage,{newss})
    // this.navCtrl.push(NewsPage,newss)
  }
  startloop(){
    this.slides.autoplay=3000;
// console.log("katanya mulai"); 
    //  this.slide.autoplayDisableOnInteraction=false;
  this.slides.startAutoplay();
  }
  // navigateToDetail(id: number ){
  //   this.navCtrl.push('NewsPage',{ id })
  // }
}
