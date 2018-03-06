import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import{ ShoweventPage } from '../showevent/showevent';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
let getApiEvent = "http://127.0.0.1:8000/api/get-events";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  events: any;

  constructor(private http:Http, public navCtrl: NavController,public modalCtrl: ModalController, public toastCtrl: ToastController) {

  }
  ionViewDidLoad() {
    this.http.get(getApiEvent).subscribe(event =>{
      let response = event.json();
      this.events = response.events;
      console.log(this.events);
    })
  }
  openModal() {
    const modal = this.modalCtrl.create(ShoweventPage);
    modal.present();
  }
  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });
    toast.present();
  }
  checkups(): string[] {
    return [
      "Region",
      "bar",
      "baz"
    ];
  }

  checkup: string = "Region";

  logChosen(): void {
    console.log(this.checkup);
  }
};
