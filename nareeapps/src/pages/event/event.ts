import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ ShoweventPage } from '../showevent/showevent';
import { ModalController, Platform, NavParams, ViewController,LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';
import { TambaheventPage } from '../tambahevent/tambahevent';
let getApiEvent = "https://nareeapp.com/api/get-events";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  events: any;
  token: string;
  profile: string;
  data :any;
  constructor(private http:Http, public navCtrl: NavController,private loadCtrl: LoadingController,public modalCtrl: ModalController, public alerCtrl: AlertController) {

  }
  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    this.http.get(getApiEvent).subscribe(event =>{
      let response = event.json();
      this.events = response.events;
      this.data = this.events[0];
      console.log(this.events);
      loading.dismiss();
    })
    this.profile = localStorage.getItem('currentUser');
    console.log("current user :",this.profile);
    this.token = localStorage.getItem('token');
    console.log("token :",this.token);
   
  }
  openModal(event) {
    console.log("event",event);
    this.navCtrl.push(ShoweventPage,{
      event
    })
    // const modal = this.modalCtrl.create(ShoweventPage,{event});
    // modal.present();
    // console.log(event);
  }
  doAlert() {
      const modal = this.modalCtrl.create(TambaheventPage);
     modal.present();
    // console.log(event);
    // let alert = this.alerCtrl.create({
    //   title: 'TAMBAH EVENT',
    //   message: 'hubungi kami melalui line@: naree.app' ,
    //   buttons: ['Ok']
    // });
    // alert.present()
  }
};
// <img src="assets/imgs/welcome32.jpg">