import { Component, ViewChild } from "@angular/core";
import { NavController, Slide, Slides } from "ionic-angular";
import { Http, Headers, RequestOptions } from "@angular/http";
import { NewsPage } from "../news/news";
import {
  IonicPage,
  ModalController,
  Platform,
  NavParams,
  ViewController,
  LoadingController
} from "ionic-angular";
import { PromotionsPage } from "../promotions/promotions";
let getApiNews = "https://nareeapp.com/api/get-news";
let getApiAds = "https://nareeapp.com/api/get-advertisements";

// import { AuthHttp, JwtHelper } from "angular2-jwt";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  pesan: any;
  @ViewChild(Slides) slides: Slides;

  token: string;
  profile: string;
  news: any;
  data: any;
  Ads:any;
  tanggal: any;
  // posts: Observable<Array<Post>>;
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private loadCtrl: LoadingController
  ) {
    
  }
  ionViewWillLeave(){
    if(this.Ads)
    this.slides.stopAutoplay();
  }
  ionViewDidEnter() {
    if(this.Ads)
    this.slides.startAutoplay();
  }
  
  ionViewWillEnter(){
    if(this.Ads)
    this.slides.startAutoplay();
  }
  ionViewDidLoad() {
    
    this.profile = localStorage.getItem("currentUser");
    // console.log("current user :",this.profile);
    this.token = localStorage.getItem("token");
    // console.log("token :",this.token);
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    let headers = new Headers({
      Authorization: "Bearer " + this.token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(getApiNews, options).subscribe(
      newss => {
        let response = newss.json();
        this.news = response.news;
        this.http.get(getApiAds, options).subscribe(
          Adss => {
            let response = Adss.json();
            this.Ads = response.advertisements;
            console.log("ini udah ada adsnya",this.Ads);
            // console.log("ini web",'https://www.nareeapp.com'+this.Ads[0].poster);
        loading.dismiss();
          },
          error => {
            alert("Check your connection and try again");
            console.log("error get data", error);
          }
        );
      },
      error => {
        alert("Check your connection and try again");
        console.log("error get data", error);
        loading.dismiss();
      }
    );
  }
  openModal(newss) {
    // const modal = this.modalCtrl.create(NewsPage,{newss});
    this.navCtrl.push(NewsPage, { newss });
    // this.navCtrl.push(NewsPage,newss)
  }
  iklan(){
    this.navCtrl.push(PromotionsPage);
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }
    startloop(){
      this.slides.autoplay=3000;
  // console.log("katanya mulai");
      //  this.slide.autoplayDisableOnInteraction=false;
    this.slides.startAutoplay();
    }
  navigateToDetail(id: number ){
    this.navCtrl.push('NewsPage',{ id })
  }
}
