import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController,AlertController,ViewController } from 'ionic-angular';
import { PembayaranPage } from '../pembayaran/pembayaran';
import { Http, RequestOptions, Headers } from "@angular/http";
import { EventPage } from '../event/event';
/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  apiPayment = "https://nareeapp.com/api/get-payment";
  getApiEventbyUser = "https://nareeapp.com/api/get-event-by-id/"; // https://nareeapp.com/api/get-event-by-id/id

  tickets: any;
  details: any;
  events: any;
  name_event: any;
  enable: boolean = false;
  detail:any;
  currentUser: any;
  input: any;
    constructor(public navCtrl: NavController,public viewCtrl:ViewController, public alertCtrl: AlertController,private http: Http, public navParams: NavParams,private loadCtrl: LoadingController) {
     
    
  }

  ionViewDidLoad() {
   
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    this.input = this.navParams.get("details");
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("isi user",this.currentUser);
    console.log('ionViewDidLoad InvoicePage', this.input);
    console.log('ionViewDidLoad InvoicePage', this.input.total_price);
    this.detail= JSON.parse(this.input.details);
    console.log("isi details",this.detail);
      this.getEventListByCurrentUser(this.input.id_event).then(
        event => {
          this.events = event;
          console.log("evhen", this.events);
          this.name_event =  this.events.events[0].name_event;
      console.log("nama event", this.name_event);
    if(this.input.status=="waiting") this.enable=true;
      loading.dismiss();        
    }
      );
  }
 
  next(){
    this.navCtrl.push(PembayaranPage, {
      nama: this.name_event,
      id: this.input.id,
      harga:this.input.total_price,
      time:this.input.created_at,
    });
  }
  
  getEventListByCurrentUser(id_event) {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.get(this.getApiEventbyUser + id_event,options).subscribe(event => {
        resolve(event.json());
      });
    });
  }
  cancel() {
    
    console.log("detail:",this.detail);
    const alert = this.alertCtrl.create({
      title: "Batalkan Pendaftaran?",
      message: "Dengan membatalkan pendaftaran, data pendaftaran kamu akan dihapus dari sistem",
      buttons: [
        {
          text: "cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Lanjutkan",
          handler: () => {
          //  this.registrationNow();
          let headers = new Headers({
            Authorization: "Bearer " + localStorage.getItem("token")
          });
          let options = new RequestOptions({ headers: headers });
          let masuk = {
            id: this.input.id,
            status:"cancel"
          };
          this.http
          .put("https://nareeapp.com/api/payment/" + this.input.id + "/nota-update", masuk,options).subscribe(user => {
          let response = user;
          console.log("ress", response);
          this.navCtrl.setRoot(EventPage);
          });
          }
        }
      ]
    });
    alert.onDidDismiss(() => console.log("Alert was dismissed by the user"));
    alert.present();
  }
  dismiss(){
    this.navCtrl.setRoot(EventPage);
  }
}
// let headers = new Headers({
//   Authorization: "Bearer " + localStorage.getItem("token")
// });
// let options = new RequestOptions({ headers: headers });
// let masuk = {
//   photo: this.base64Image
// };
// this.http
// .put("https://nareeapp.com/api/payment/" + this.details.id + "/photo", masuk,options).subscribe(user => {
// https://nareeapp.com/api/payment/2/nota-update",
// let response = user;
// console.log("ress", response);
// });