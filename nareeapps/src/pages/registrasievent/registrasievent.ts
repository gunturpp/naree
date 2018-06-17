import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatapesertaPage } from "../datapeserta/datapeserta";
import { Http } from "@angular/http";

/**
 * Generated class for the RegistrasieventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-registrasievent",
  templateUrl: "registrasievent.html"
})
export class RegistrasieventPage {
  event: any;
  isChecked: boolean;
  totalPrice = 0;
  ticketStatus = [];
  tipetiket: {};
  tickets: any;
  apiTicket = "https://nareeapp.com/api/get-tickettype";
  categories: any;
  constructor(
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.isChecked = false;
    // all categories by event
    this.event = this.navParams.get("event");
    console.log("getting event", this.event);
    this.categories = this.navParams.get("categories");

    this.getApiTicket().then(data => {
      this.tipetiket = data;

      // set status tiket all uncheck by array
      console.log("bisa", this.tipetiket);
      for (var x = 0; x < this.tipetiket.length; x++) {
        this.ticketStatus[x] = false;
      }
    });
  }
  getApiTicket() {
    return new Promise(resolve => {
      this.http.get(this.apiTicket).subscribe(tickets => {
        this.tickets = tickets.json();
        resolve(this.tickets.tickets);
      });
    });
  }
  checklist(signTicket,i, price) {
    let j: any;
    console.log("checklist?:", signTicket + this.ticketStatus[i] + price);
    if(this.ticketStatus[i] == true) {
      this.totalPrice += parseInt(price);
    } else {
      this.totalPrice -= parseInt(price);      
    }
    console.log("total biaya : ", this.totalPrice);
  }
  next() {
    console.log("total biaya : ", this.totalPrice);
    this.navCtrl.push(DatapesertaPage,{
      biayaTotal: this.totalPrice,
      categories: this.categories,
      event: this.event
    });
  }
}
