import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ ShoweventPage } from '../showevent/showevent';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
let getApiEvent = "http://127.0.0.1:8000/api/get-events";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  events: any;

  constructor(private http:Http, public navCtrl: NavController,public modalCtrl: ModalController, public alerCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.http.get(getApiEvent).subscribe(event =>{
      let response = event.json();
      this.events = response.events;
      console.log(this.events);
    })
  }
  openModal(event) {
    const modal = this.modalCtrl.create(ShoweventPage,{event});
    modal.present();
    console.log(event);
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'WTFFFFFF ADDD MEEEEEE' ,
      buttons: ['Ok']
    });
    alert.present()
  }
};
// <img src="assets/imgs/welcome32.jpg">