import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Http, Headers, RequestOptions } from "@angular/http";
import { ShoweventPage } from "../showevent/showevent";
import {
  ModalController,
  Platform,
  NavParams,
  ViewController,
  LoadingController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { DataProvider } from "../../providers/data/data";
import { TambaheventPage } from "../tambahevent/tambahevent";
import { TiketPage } from "../tiket/tiket";
let getApiEvent = "https://nareeapp.com/api/get-events";
let getApiEventSpecial = "https://nareeapp.com/api/get-events-special";

@Component({
  selector: "page-event",
  templateUrl: "event.html"
})
export class EventPage {
  events: any = [];
  allEvents: any = [];
  token: string;
  profile: string;
  totalEvent: any;
  loadEvent = 5;
  eventSpecial: any;
  // data: any;
  constructor(
    private http: Http,
    public navCtrl: NavController,
    private loadCtrl: LoadingController,
    public modalCtrl: ModalController,
    public alerCtrl: AlertController
  ) {}
  
  ionViewDidLoad() {
  
    this.profile = localStorage.getItem("currentUser");
    // console.log("current user :", this.profile);
    this.token = localStorage.getItem("token");
    // console.log("token :", this.token);
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    let headers = new Headers({
      Authorization: "Bearer " + this.token
    });
    let options = new RequestOptions({ headers: headers });
    // get-event
    setTimeout(() => {
      this.http.get(getApiEvent, options).subscribe(
        event => {
          let response = event.json();
          // delay Infinity loop
          this.events = response.events;
          // this.allEvents = response.events;
          this.totalEvent = this.allEvents.length;

          // for (let i = 0; i < 6; i++) {
          //   this.events.push(this.allEvents[i]);
          // }
          console.log(this.events);
          loading.dismiss();
        },
        error => {
          alert("Check your connection and try again");
          console.log("error get data", error);
          loading.dismiss();
        }
      );
    }, 1000);
    // get-event-special
    this.http.get(getApiEventSpecial, options).subscribe(
      event => {
        let response = event.json();
        this.eventSpecial = response.events;

        console.log("special event : ",this.eventSpecial);
        loading.dismiss();
      },
      error => {
        console.log("error get data", error);
        loading.dismiss();
      }
    );
  }
  // doInfinite(infiniteScroll) {
  //   console.log("Begin async operation");

  //   setTimeout(() => {
  //     let headers = new Headers({
  //       Authorization: "Bearer " + this.token
  //     });
  //     let options = new RequestOptions({ headers: headers });
  //     this.http.get(getApiEvent, options).subscribe(
  //       res => {
  //         let response = res.json();
  //         this.allEvents = response.events;
  //         for (let i = this.loadEvent; i < this.loadEvent + 3; i++) {
  //           this.events.push(this.allEvents[i]);
  //         }
  //         console.log("loaded event", this.events);
  //         this.loadEvent = this.loadEvent + 3;
  //       },
  //       error => {
  //         console.log("error saay get data", error);
  //         alert("Koneksi bermasalah, silahkan coba kembali");
  //       }
  //     );
  //     console.log("Async operation has ended");
  //     infiniteScroll.complete();
  //   }, 1000);
  // }
  openModal(event) {
    console.log("eventzz", event);
    this.navCtrl.push(ShoweventPage, {
      event
    });
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
  ticketList() {
    this.navCtrl.push(TiketPage);
  }
}
