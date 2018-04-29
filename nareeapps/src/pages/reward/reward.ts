import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { CheckinDailyPage } from "../checkin-daily/checkin-daily";
import { Observable } from "rxjs/Observable";
import { DataProvider } from "../../providers/data/data";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Storage } from '@ionic/storage';
import { TabsPage } from "../tabs/tabs";
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
  historyExp: any;
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
  experience:any;
  exp:any;
  jumlahexp:number;
  levels:number;
  user:any;
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
    this.historyExp = JSON.parse(localStorage.getItem("expHistory"));
    this.experience = JSON.parse(localStorage.getItem("experience"));
    for (var i = 0; i < this.experience.length; i++) {
      if (this.experience[i].level == this.profiles.level) {
        this.levels = this.experience[i].level;
        this.MaxExp = this.experience[i].maxExp;
        // this.MaxExp=150;
        console.log("experience: ",this.experience[i].level);
      }
    }
    this.today = new Date().toISOString();
    console.log("profil : ",this.profiles);
    console.log("exp : ",this.experience);
    console.log("history : ",this.historyExp);
    console.log("constractor: ",this.persentase);
    this.hari = this.today.split("T")[0];
    console.log("terbaru : ",this.hari);
    this.riwayat = [];
    this.jumlah = 0;
    this.nama = "Daily Check-in";
    this.dailyExp = 5; 
    this.storage.get('checkhari').then((data) => {
      this.items = data;
      console.log("hari yang ada di data",this.items);
      console.log("profil : ",this.profiles);
      console.log("history : ",this.historyExp);
      this.hari = this.today.split("T")[0];
      if(this.hari==this.items){
        this.checkin=false;
        console.log("checkin",this.checkin);
        this.checkout=true;
        console.log("checkout",this.checkout);
      };
     
  });
  
  
  }
  ionViewDidLoad() {
    console.log("persentase load", this.persentase);
  
    // if(this.hari==this.items){
    //   this.checkin=false;
    //   console.log("checkin",this.checkin);
    //   this.checkout=true;
    //   console.log("checkout",this.checkout);
    // };
    
   
   }
  ionViewWillEnter() {
    this.jumlah = 0;
    this.persentase=0;
    this.MaxExp=0;
    
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    this.historyExp = JSON.parse(localStorage.getItem("expHistory"));

    console.log("persentase", this.persentase);
        for (var i = 0; i < this.experience.length; i++) {
          if (this.experience[i].level == this.profiles.level) {
            this.levels = this.experience[i].level;
            this.MaxExp = this.experience[i].maxExp;
            // this.MaxExp=150;
            console.log("experience: ",this.experience[i].level);
          }
        }
      this.persentase=(this.profiles.exp/this.MaxExp)*100;
      console.log("persentase =",this.persentase);
      if(this.persentase >= 100){
        this.showPopup = true;
        this.showHeader = false;
        if(this.profiles.level>=10)
        this.show2digit =true;
        else this.show1digit=true;
      }
      else {
        this.showPopup = false;
        this.showHeader = true;
      }
     
      
  }

  takeLevel(){
    this.profiles.exp-=this.MaxExp;
    this.jumalahlevel=parseInt(this.profiles.level.toString())+1;
    console.log("levellast=",this.profiles.level);
    let add = ({
      exp:this.profiles.exp,
      level:this.jumalahlevel,
    });
    this.http.put("https://nareeapp.com/api/users/"+this.profiles.id +"/update",add).subscribe(user => {
      let response = user.text;
    });
      // location.reload();
      this.showPopup = false;
      this.showHeader = true;
      let masuk = ({
        id: this.profiles.id,
        name:this.profiles.name,
        email:this.profiles.email,
        username:this.profiles.username,
        gender:this.profiles.gender,
        birthdate:this.profiles.birthdate,
        occupation: this.profiles.occupation,
        photo:this.profiles.photo,
        no_hp :this.profiles.no_hp,
        about_me:this.profiles.about_me,
        team: this.profiles.team,
        exp: this.profiles.exp,
        dance_type:this.profiles.dance_type,
        level:  this.jumalahlevel,
      });
        localStorage.setItem("currentUser",JSON.stringify(masuk));
      this.navCtrl.push(RewardPage);
  }
  
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
        this.historyExp.push(response.success);
        console.log("history",this.historyExp);
      });
      this.jumlahexp =parseInt(this.profiles.exp.toString())+ parseInt(this.dailyExp.toString());
      let tambah = ({
        exp:this.jumlahexp,
      });
      this.http.put("https://nareeapp.com/api/users/"+this.profiles.id +"/update",tambah).subscribe(user => {
        let response = user.text;
    });
   
      let masuk = ({
        id: this.profiles.id,
        name:this.profiles.name,
        email:this.profiles.email,
        username:this.profiles.username,
        gender:this.profiles.gender,
        birthdate:this.profiles.birthdate,
        occupation: this.profiles.occupation,
        photo:this.profiles.photo,
        no_hp :this.profiles.no_hp,
        about_me:this.profiles.about_me,
        team: this.profiles.team,
        exp: this.jumlahexp,
        dance_type:this.profiles.dance_type,
        level: this.profiles.level,
      });
        localStorage.setItem("currentUser",JSON.stringify(masuk));
        console.log("sukses ubah currnet ")
    this.storage.set('checkhari', this.hari);
    this.checkin=false;
    // console.log("checkin",this.checkin);
    this.checkout=true;
    // console.log("checkout",this.checkout);

    this.navCtrl.push(CheckinDailyPage);
  }
}
