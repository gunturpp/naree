import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { ShoweventPage } from "../showevent/showevent";
import { TabsPage } from "../tabs/tabs";
import { Http, Headers, RequestOptions } from "@angular/http";
import { HomePage } from "../home/home";
/**
 * Generated class for the CheckinEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-checkin-event",
  templateUrl: "checkin-event.html"
})
export class CheckinEventPage {
  riwayat: any = [];
  profiles: any;
  history: any = [];
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckinEventPage");
  }
  goback() {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    this.http
      .get("https://nareeapp.com/api/get-history", options)
      .subscribe(histories => {
        let response = histories.json();
        this.history = response.histories;
        console.log("cek API get1", this.history[0].id_user);
        console.log("cek API get2", this.profiles.id);
        for (var i = 0, j = 0; i < this.history.length; i++) {
          if (this.history[i].id_user == this.profiles.id) {
            this.riwayat[j] = this.history[i];
            j++;
          }
        }
        // show popup when levelup
        localStorage.setItem("expHistory", JSON.stringify(this.riwayat));
      });
        let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'flex';
      });

  }
    this.navCtrl.setRoot(TabsPage);
  }
}
