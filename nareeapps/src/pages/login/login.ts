import { Component } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController,
  ViewController,App
} from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";
import { Http, Headers, RequestOptions } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { ForgotpasswordPage } from "../forgotpassword/forgotpassword";
import { HomePage } from "../home/home";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  ukuran: number;
  daily: any = "sesuatu";
  hadir: any = [];
  kehadiran: any = [];
  achiev: any = [];
  achievements: any;
  riwayat: any = [];
  profiles: any;
  history: any;
  judul: any = "Daily Check-in";
  token: any;
  statusnya: any;
  HAS_LOGGED_IN = "hasLoggedIn";
  public loginState = false;
  
  statusversion140:boolean = false;
  user: { email?: string; password?: string } = {};
  submitted = false;
  exp: any;
  headers = new Headers({
    Authorization: 'Bearer ' + localStorage.getItem("token")
  });
  options = new RequestOptions({ headers: this.headers });
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController,
    public storage: Storage,
    public http: Http,
    public app: App,
    public viewCtrl: ViewController
  ) {
    if(!localStorage.getItem("statusversion140") && !localStorage.getItem("token")) {
      localStorage.setItem("statusversion140", "false");
    } else if(localStorage.getItem("statusversion140") == "false") {
      localStorage.removeItem("token");
      localStorage.setItem("statusversion140", "true");
    }
    // kalo tokennya gak expired, langsung push tabspage
    if (localStorage.getItem("token") != null) {
      this.profiles = JSON.parse(localStorage.getItem("currentUser"));
      this.http.get("https://nareeapp.com/api/users/"+this.profiles.id +"/edit", this.options).subscribe( userss => {
        let response = userss.json();
        console.log("user profile" ,response);
          localStorage.setItem( "currentUser", JSON.stringify(response.currentuser));
          this.profiles = JSON.parse(localStorage.getItem("currentUser"));
          console.log("ini ada ga sih ",this.profiles);
      });
      this.http
        .get("https://nareeapp.com/api/get-history",this.options)
        .subscribe(histories => {
          let response = histories.json();
          this.history = response.histories;
          if (this.history != null) {
            // console.log("cek API get1", this.history[0].id_user);
            // console.log("cek API get2", this.profiles.id);
            for (var i = 0, j = 0; i < this.history.length; i++) {
              if (this.history[i].id_user == this.profiles.id) {
                this.riwayat[j] = this.history[i];
                j++;
              }
            }
          }
          // console.log("cek ada history apa tidak", this.riwayat);
          // show popup when levelup
          localStorage.setItem("expHistory", JSON.stringify(this.riwayat));
          // console.log("cek ada history apa tidak", this.riwayat);
          this.ukuran = parseInt(this.riwayat.length.toString());
          for (let i = this.ukuran - 1; i >= 0; i--) {
            // console.log("riwayat", this.riwayat[i]);
            if (this.riwayat[i].judul === this.judul) {
              // console.log("riwayat", this.riwayat[i].judul);
              this.daily = this.riwayat[i].updated_at;
            }
          }
          this.daily = this.daily.split(" ")[0];
          // console.log("daily ", this.daily);
          this.storage.set("checkhari", this.daily);
        });

      // this.daily =  this.daily.split(" ")[0];

      //untuk mengambil DB exps
      if (this.exp == null) {
        this.http.get("https://nareeapp.com/api/get-exps",this.options).subscribe(level => {
          let response = level.json();
          // save profile in localstorage
          localStorage.setItem("experience", JSON.stringify(response.exps));
          // console.log("exp di local storage", response.exps);
        });
      }
      this.http
        .get("https://nareeapp.com/api/get-achievement",this.options)
        .subscribe(achievement => {
          let response = achievement.json();
          this.achievements = response.achievements;
          console.log("ach :", this.achievements);
          for (var i = 0, j = 0; i < this.achievements.length; i++) {
            if (this.achievements[i].username == this.profiles.username) {
              this.achiev[j] = this.achievements[i];
              j++;
            }
          }
          localStorage.setItem("achievement", JSON.stringify(this.achiev));
        });
      this.http
        .get("https://nareeapp.com/api/get-kehadirans",this.options)
        .subscribe(hadir => {
          let response = hadir.json();
          this.kehadiran = response.kehadirans;
          // console.log("kehadiran :", this.kehadiran);
          for (var i = 0, j = 0; i < this.kehadiran.length; i++) {
            if (this.kehadiran[i].id_user == this.profiles.id) {
              this.hadir[j] = this.kehadiran[i].id_event;
              j++;
            }
          }
          this.storage.set("eventcheckin", this.hadir);
        });
          // let nav = this.app.getRootNav(); 
              // nav.setRoot(TabsPage);
              this.navCtrl.setRoot(TabsPage);
    
    }
    
    this.exp = JSON.parse(localStorage.getItem("experience"));
   
  }


  onLogin(form: NgForm) {
    // kondisi submit true
    this.submitted = true;
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });

    if (form.valid) {
      loading.present();
      let input = {
        email: this.user.email,
        password: this.user.password
      };
      // console.log(this.user.password);
      this.http.post("https://nareeapp.com/api/login", input).subscribe(
        data => {
          let response = data.json();
          // login berhasil
          if (response.status == 200) {
            // save profile in localstorage
            localStorage.setItem(
              "currentUser",
              JSON.stringify(response.currentuser)
            );
            this.profiles = JSON.parse(localStorage.getItem("currentUser"));
            // save token in localstorage
            localStorage.setItem("token", response.token);
            this.http
              .get("https://nareeapp.com/api/get-history",this.options)
              .subscribe(histories => {
                let response = histories.json();
                this.history = response.histories;
                if (this.history != null) {
                  // console.log("cek API get1", this.history[0].id_user);
                  // console.log("cek API get2", this.profiles.id);
                  for (var i = 0, j = 0; i < this.history.length; i++) {
                    if (this.history[i].id_user == this.profiles.id) {
                      this.riwayat[j] = this.history[i];
                      j++;
                    }
                  }
                }
                // console.log("cek ada history apa tidak", this.riwayat);
                // show popup when levelup
                localStorage.setItem(
                  "expHistory",
                  JSON.stringify(this.riwayat)
                );
                // console.log("cek ada history apa tidak", this.riwayat);
                this.ukuran = parseInt(this.riwayat.length.toString());
                for (let i = this.ukuran - 1; i >= 0; i--) {
                  // console.log("riwayat", this.riwayat[i]);
                  if (this.riwayat[i].judul === this.judul) {
                    // console.log("riwayat", this.riwayat[i].judul);
                    this.daily = this.riwayat[i].updated_at;
                  }
                }
                this.daily = this.daily.split(" ")[0];
                // console.log("daily ", this.daily);
                this.storage.set("checkhari", this.daily);
              });

            // this.daily =  this.daily.split(" ")[0];

            //untuk mengambil DB exps
            if (this.exp == null) {
              this.http
                .get("https://nareeapp.com/api/get-exps",this.options)
                .subscribe(level => {
                  let response = level.json();
                  // save profile in localstorage
                  localStorage.setItem(
                    "experience",
                    JSON.stringify(response.exps)
                  );
                  // console.log("exp di local storage", response.exps);
                });
            }
            this.http
              .get("https://nareeapp.com/api/get-achievement",this.options)
              .subscribe(achievement => {
                let response = achievement.json();
                this.achievements = response.achievements;
                // console.log("ach :", this.achievements);
                for (var i = 0, j = 0; i < this.achievements.length; i++) {
                  if (this.achievements[i].username == this.profiles.username) {
                    this.achiev[j] = this.achievements[i];
                    j++;
                  }
                }
                localStorage.setItem(
                  "achievement",
                  JSON.stringify(this.achiev)
                );
              });
            this.http
              .get("https://nareeapp.com/api/get-kehadirans",this.options)
              .subscribe(hadir => {
                let response = hadir.json();
                this.kehadiran = response.kehadirans;
                // console.log("kehadiran :", this.kehadiran);
                for (var i = 0, j = 0; i < this.kehadiran.length; i++) {
                  if (this.kehadiran[i].id_user == this.profiles.id) {
                    this.hadir[j] = this.kehadiran[i].id_event;
                    j++;
                  }
                }
                this.storage.set("eventcheckin", this.hadir);
              });
              loading.dismiss();
              // let nav = this.app.getRootNav(); 
              // nav.setRoot(TabsPage);
            this.navCtrl.setRoot(TabsPage, { animate: false });
            
            // this.viewCtrl.dismiss();
          } else {
            // this.showAlert(response.message);
            // console.log(response.message);
            // console.log("password salah");
          }
        },
        err => {
          loading.dismiss();
          this.showError(err);
          // console.log("eerrror", err);
        }
      );
    }
  }

  showError(err: any) {
    err.status == 0
      ? this.showAlert(
          "Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"
        )
      : this.showAlert("Email atau password salah");
  }
  showAlert(val) {
    let toast = this.toastCtrl.create({
      message: val,
      duration: 3000
    });
    toast.present();
  }
  forgotPassword() {
    // console.log("forgot password");
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
  forgotpassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }
}
