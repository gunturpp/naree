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
  enable: boolean = false;
  event: any;
  isChecked: boolean;
  totalPrice = 0;
  ticketStatus = [];
  tipetiket: any;
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
    for (var i = 0; i < this.categories.length; i++) {
      this.categories[i].checklist = false;
    }
    this.getApiTicket().then(data => {
      this.tipetiket = data;
      console.log("leng tiket", this.tipetiket.length);
      // set status tiket all uncheck by array
      // console.log("bisa", this.tipetiket);
      for (let x = 0; x < this.tipetiket.length; x++) {
        this.ticketStatus[x] = false;
        this.tipetiket[x].checklist = false;
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
  checklist(signTicket, i, price) {
    this.tipetiket[i].checklist = this.ticketStatus[i];
    for (var y = 0; y < this.categories.length; y++) {
      if (
        this.tipetiket[i].id_category == this.categories[y].id &&
        this.tipetiket[i].checklist == true
      ) {
        this.categories[y].checklist = true;
      }
      if (
        this.tipetiket[i].id_category == this.categories[y].id &&
        this.tipetiket[i].checklist == false
      ) {
        this.categories[y].checklist = false;
      }
    }
    console.log("checklist?:", signTicket + this.ticketStatus[i] + price);
    if (this.ticketStatus[i] == true) {
      this.totalPrice += parseInt(price);
      this.enable = true;
    } else {
      this.totalPrice -= parseInt(price);
    }
    if(this.totalPrice == 0) {
      this.enable = false;
    }
    console.log("total biaya : ", this.totalPrice);
  }
  next() {
    console.log("total biaya : ", this.ticketStatus);
    this.navCtrl.push(DatapesertaPage, {
      biayaTotal: this.totalPrice,
      categories: this.categories,
      tipetiket: this.tipetiket,
      event: this.event
    });
  }
}
