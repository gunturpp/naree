import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { CheckinDailyPage } from "../checkin-daily/checkin-daily";
import { Observable } from "rxjs/Observable";
import { DataProvider } from "../../providers/data/data";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Storage } from '@ionic/storage';
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
  show2digit: boolean = false;
  show1digit: boolean= false;
  pet: string = "level";
  profiles: any;
  history: any;
  panjang: any;
  riwayat: any;
  jumlah: any;
  persentase: any;
  nama: any;
  dailyExp: number;
  leveluser:number;
  experience:any;
  exp:any;
  jumlahexp:number;
  levels:number;
  user:any;
  expuser:number;
  levelId:any;
  MaxExp:number;
  waktu:any;
  hariIni:any;
  jumalahlevel:number;
checkin:boolean=true;
  checkout:boolean=false;
  today: any = new Date().toISOString();
  hari:any;
  items:any;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage,
  ) {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    this.riwayat = [];
    this.jumlah = 0;
    this.persentase = 0;
    this.nama = "Daily Check-in";
    this.dailyExp = 5;
    this.storage.get('checkhari').then((data) => {
      this.items = data;
      console.log("hari yang ada di data",this.items);
      
  });
    
  }
  ionViewDidLoad() {
    console.log("persentase load", this.persentase);
    // this.http.get("https://nareeapp.com/api/get-history").subscribe(histories => {
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
    //   }); this.http.get("https://nareeapp.com/api/get-exps").subscribe(exps => {
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
  
    this.hari = this.today.split("T")[0];
    if(this.hari==this.items){
      this.checkin=false;
      console.log("checkin",this.checkin);
      this.checkout=true;
      console.log("checkout",this.checkout);
    };

   }
  ionViewWillEnter() {
    this.jumlah = 0;
    this.persentase=0;
    this.expuser=0;
    this.MaxExp=0;
    console.log("persentase", this.persentase);
    this.http.get("https://nareeapp.com/api/get-history").subscribe(histories => {
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
            // this.jumlah = 15;
            //  this.persentase=(this.jumlah/this.MaxExp)*100;
            j++;
          }
        }
        // show popup when levelup
      });
      this.http.get("https://nareeapp.com/api/users/"+this.profiles.id +"/edit").subscribe( userss => {
      let response = userss.json();
      // let response = userss;
      this.user = response.currentuser;
      this.expuser  = this.user.exp;
      console.log("expuser1 =",this.expuser);
      this.leveluser= this.user.level;
      // this.leveluser= 1;
      console.log("leveluser1 =",this.leveluser); 

  });
      this.http.get("https://nareeapp.com/api/get-exps").subscribe(exps => {
        let response = exps.json();
        this.experience=response.exps;
        for (var i = 0; i < this.experience.length; i++) {
          if (this.experience[i].level == this.leveluser) {
            this.levels = this.experience[i].level;
            this.MaxExp = this.experience[i].maxExp;
            // this.MaxExp=150;
            console.log("experience: ",this.experience[i].level);
          }
        }
      
      console.log("expuser =",this.expuser);
      console.log("MaxExp =",this.MaxExp);
      this.persentase=(this.expuser/this.MaxExp)*100;
      
      console.log("persentase =",this.persentase);
      if(this.persentase >= 100){
        this.showPopup = true;
        this.showHeader = false;
        if(this.leveluser>=10)
        this.show2digit =true;
        else this.show1digit=true;
      }
      else {
        this.showPopup = false;
        this.showHeader = true;
      }
      
    });
  }
  takeLevel(){
    this.expuser-=this.MaxExp;
    this.jumalahlevel=parseInt(this.leveluser.toString())+1;
    console.log("levellast=",this.leveluser);
    let add = ({
      exp:this.expuser,
      level:this.jumalahlevel,
    });
    this.http.put("https://nareeapp.com/api/users/"+this.profiles.id +"/update",add).subscribe(user => {
      let response = user.text;
    });
      // location.reload();
      this.showPopup = false;
      this.showHeader = true;
      this.navCtrl.push(RewardPage);
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
      exp: this.dailyExp,
    };
    this.http
      .post("https://nareeapp.com/api/post-history", input)
      .subscribe(data => {
        let response = data.json();
        console.log(response);
      });
      this.jumlahexp =parseInt(this.expuser.toString())+ parseInt(this.dailyExp.toString());
      let tambah = ({
        exp:this.jumlahexp,
      });
      this.http.put("https://nareeapp.com/api/users/"+this.profiles.id +"/update",tambah).subscribe(user => {
        let response = user.text;
    });
    this.storage.set('checkhari', this.hari);
    this.checkin=false;
    // console.log("checkin",this.checkin);
    this.checkout=true;
    // console.log("checkout",this.checkout);

    this.navCtrl.push(CheckinDailyPage);
  }
}
