import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";

// @IonicPage()
@Component({
  selector: "page-tiket",
  templateUrl: "tiket.html"
})
export class TiketPage {
  new_id_event = [];
  length: any;
  pay: any;
  events = [];
  payments: any;
  user: any;
  getApiPaymentbyUser = "https://nareeapp.com/api/get-payments-by-iduser/"; // https://nareeapp.com/api/get-payments-by-id/2/id_user
  getApiEventbyUser = "https://nareeapp.com/api/get-event-by-id/"; // https://nareeapp.com/api/get-event-by-id/id
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TiketPage");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getTicketListByCurrentUser().then(payment => {
      this.pay = payment;
      this.payments = this.pay.payments;
      console.log("payment list:", this.payments);
      // remove duplicate id_event
      for (let i = 0; i < this.payments.length; i++) {
        if (this.new_id_event.indexOf(this.payments[i].id_event) == -1) {
          this.new_id_event.push(this.payments[i].id_event);
        }
      }
      // console.log("id_ev", this.new_id_event);
      // get event list by id_event
      for (let i = 0; i < this.new_id_event.length; i ++) {
        this.getEventListByCurrentUser(this.new_id_event[i]).then(
          event => {
            let temp:any = event;
            this.events[i] = temp.events[0];
            // console.log("evhen", event);
          }
        );
      }
      console.log("events list:", this.events);
    });
  }

  getTicketListByCurrentUser() {
    return new Promise(resolve => {
      this.http
        .get(this.getApiPaymentbyUser + this.user.id)
        .subscribe(payment => {
          resolve(payment.json());
        });
    });
  }

  getEventListByCurrentUser(id_event) {
    return new Promise(resolve => {
      this.http.get(this.getApiEventbyUser + id_event).subscribe(event => {
        resolve(event.json());
      });
    });
  }
}
