import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import {
  ModalController,
  Platform,
  ViewController,
  LoadingController
} from "ionic-angular";
let getApiAds = "https://nareeapp.com/api/get-advertisements"
/**
 * Generated class for the PromotionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {
  profile: string;
  token: string;
  Ads: any;
  advertisements: any;
  
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private loadCtrl: LoadingController
  ) {
    
  }
  ionViewWillLeave(){
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });
    }
  }
  ionViewDidLoad() {
    this.profile = localStorage.getItem("currentUser");
    this.token = localStorage.getItem("token");
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    let headers = new Headers({
      Authorization: "Bearer " + this.token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(getApiAds, options).subscribe(
      newss => {
        let response = newss.json();
        this.advertisements = response.advertisements;
        console.log("Ads inu",this.advertisements);
        loading.dismiss();
      },
      error => {
        alert("Check your connection and try again");
        console.log("error get data", error);
        loading.dismiss();
      }
    );
  }
  balik(){
    this.navCtrl.pop();
      
  }
 
}
