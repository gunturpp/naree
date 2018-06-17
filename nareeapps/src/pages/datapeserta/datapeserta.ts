import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { KonfirmasipendaftaranPage } from "../konfirmasipendaftaran/konfirmasipendaftaran";

/**
 * Generated class for the DatapesertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-datapeserta",
  templateUrl: "datapeserta.html"
})
export class DatapesertaPage {
  event: any;
  categories: any;
  user: any;
  totalBiaya: any;
  member = [];
  name_member = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.categories = this.navParams.get("categories");
    this.totalBiaya = this.navParams.get("biayaTotal");
    this.event = this.navParams.get("event");
    for (var x = 0; x < this.categories.length; x++) {
      let num = 1;
      for (var y = 0; y < this.categories[x].max_person; y++) {
        this.member[y] = num;
        this.name_member[y+1] = "username";
        num++;
        console.log("ionViewDidLoad DatapesertaPage",this.categories[x].max_person);
      }
    }
    console.log("ha", this.member);
    this.getCurrentUser();
    console.log(this.getCurrentUser());
  }
  next() {
    console.log("biodata", this.totalBiaya);
    console.log("biodata1", this.user.team);
    console.log("biodata2", this.user.username);
    console.log("biodata3", this.user.email);
    console.log("biodata4", this.user.no_hp);
    for (var y = 0; y < this.name_member.length-1; y++) {
      console.log("nama member", y + this.name_member[y]);
    }
    // console.log("biodata6", this.user.);
    // console.log("biodata7", this.user.);
    // console.log("biodata8", this.user.);
    this.navCtrl.push(KonfirmasipendaftaranPage, {
      shadowPayment: {
        totalBiaya: this.totalBiaya,
        team: this.user.team,
        username: this.user.username,
        name_event: this.event.name_event,
        categories: this.categories,
        name_member: this.name_member,
        no_hp: this.user.no_hp,
        email: this.user.email
      }
    });
  }
  getCurrentUser() {
    return (this.user = JSON.parse(localStorage.getItem("currentUser")));
  }
}
