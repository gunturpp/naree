import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { CheckinDailyPage } from "../checkin-daily/checkin-daily";
import { Observable } from "rxjs/Observable";
import { DataProvider } from "../../providers/data/data";
import { Http, Headers, RequestOptions } from "@angular/http";

/**
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-reward",
  templateUrl: "reward.html"
})
export class RewardPage {
  showPopup: boolean = false;
  showHeader: boolean= false;
  pet: string = "level";
  profiles: any;
  history: any;
  panjang: any;
  riwayat: any;
  jumlah: any;
  persentase: any;
  nama: any;
  dailyExp: any;
  experience:any;
  exp:any;
  levels:any;
  levelId:any;
  MaxExp:any;
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    this.riwayat = [];
    this.jumlah = 0;
    this.persentase = 0;
    this.nama = "Daily Check-in";
    this.dailyExp = 5;
  }
  ionViewDidLoad() {
    // this.http.get("http://192.168.43.118/api/get-history").subscribe(histories => {
    //     let response = histories.json();
    //     this.history = response.histories;
    //     this.panjang = this.history.length;
    //     console.log(this.panjang);
    //     console.log(this.profiles.id);
    //     for (var i = 0, j = 0; i < this.panjang; i++) {
    //       if (this.history[i].id_user == this.profiles.id) {
    //         this.riwayat[j] = this.history[i];
    //         this.jumlah = 15;
    //         this.persentase=(this.jumlah/this.MaxExp)*100;
    //         j++;
    //       }
    //     }
    //     console.log(this.persentase);
    //   }); this.http.get("http://192.168.43.118/api/get-exps").subscribe(exps => {
    //     let response = exps.json();
    //     this.experience=response.exps;
    //     console.log("experience:",this.experience[0].level);
    //     console.log("level user :",this.profiles.level);
    //     for (var i = 0; i < this.experience.length; i++) {
    //       console.log("level exp: ",this.experience[5].level);

    //       if (this.experience[i].level == 1) {
    //         this.levels = this.experience[i].level;
    //         this.MaxExp = this.experience[i].maxExp;
    //                   }
    //     }
    //   }); 
   }
  ionViewWillEnter() {
    this.jumlah = 0;
    this.http.get("http://192.168.43.118/api/get-history").subscribe(histories => {
        let response = histories.json();
        this.history = response.histories;
        this.panjang = this.history.length;
        console.log(this.panjang);
        console.log(this.profiles.id);
        for (var i = 0, j = 0; i < this.panjang; i++) {
          if (this.history[i].id_user == this.profiles.id) {
            this.riwayat[j] = this.history[i];
            // this.jumlah += this.history[i].exp;
            // tinggal comment baris 76 dan uncomment baris 74
            this.jumlah = 15;
             this.persentase=(this.jumlah/this.MaxExp)*100;
            j++;
          }
        }
        console.log("persentase", this.persentase);
        // show popup when levelup
        if(this.persentase >= 100){
          this.showPopup = true;
          this.showHeader = false;
        }
        else {
          this.showPopup = false;
          this.showHeader = true;
        }
    
      });
      this.http.get("http://192.168.43.118/api/get-exps").subscribe(exps => {
        let response = exps.json();
        this.experience=response.exps;
        console.log("exp :",this.profiles.level);
        for (var i = 0; i < this.experience.length; i++) {
          if (this.experience[i].level == this.profiles.level) {
            this.levels = this.experience[i].level;
            this.MaxExp = this.experience[i].maxExp;
            console.log("experience: ",this.experience[i].level);
          }
        }
      });
  }
  takeLevel(){
      this.showPopup = false;
      this.showHeader = true;
  }
  // checkin() {
  //   this.navCtrl.push(CheckinDailyPage);
  // }
  openModal() {
    let contentHeaders = new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let input = {
      id_user: this.profiles.id,
      judul: this.nama,
      exp: this.exp
    };
    this.http
      .post("http://192.168.43.118/api/post-history", input)
      .subscribe(data => {
        let response = data.json();
        console.log(response);
      });
    const modal = this.modalCtrl.create(CheckinDailyPage);
    modal.present();
  }
}
