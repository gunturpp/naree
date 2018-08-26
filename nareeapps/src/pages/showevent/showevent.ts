import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import {
  ModalController,
  ToastController,
  AlertController,
  ActionSheetController,
  Platform,
  NavParams,
  ViewController
} from "ionic-angular";
import { Http, Headers, RequestOptions } from "@angular/http";
import { CheckinEventPage } from "../checkin-event/checkin-event";
import { Storage } from "@ionic/storage";
import { RegistrasieventPage } from "../registrasievent/registrasievent";
declare var google: any;

// **
//  * Generated class for the ShoweventPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

@Component({
  selector: "page-showevent",
  templateUrl: "showevent.html"
})
export class ShoweventPage {
  event: any;
  historyExp: any;
  x: string;
  data: any;
  nama: any;
  tipe: any;
  location: any;
  province: any;
  tanggal: any;
  isi: any;
  org: any;
  foto_poster: any;
  duration: any;
  tiket: any;
  longtitude: any;
  lattitude: any;
  profiles: any;
  user: any;
  bayar: boolean = true;
  exp: any;
  kategoris: any;
  expuser: number;
  jumlahexp: number;
  rating: number;
  bintang: any; //nilai array rating
  ratings: any; //nilai rating yang di get dari DB
  absen: boolean = true;
  idevent: any;
  panjang: any;
  free: boolean = false;
  items: any;
  showcheckin: boolean = true;
  showcancel: boolean = false;
  any_register: any;
  getApiPaymentbyUser = "https://nareeapp.com/api/get-payments-by-iduser/"; // https://nareeapp.com/api/get-payments-by-id/2/id_user
  getApiEventbyUser = "https://nareeapp.com/api/get-event-by-id/"; // https://nareeapp.com/api/get-event-by-id/id

  @ViewChild("map") mapRef: ElementRef;
  payments: any;
  pay: {};
  new_id_event: any;
  events: any;
  constructor(
    private http: Http,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public loadCtrl: LoadingController
  ) {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    this.data = this.navParams.get("event");
    this.historyExp = JSON.parse(localStorage.getItem("expHistory"));
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    this.http
      .get(
        "https://nareeapp.com/api/get-payments-by-iduser/" + this.profiles.id,
        options
      )
      .subscribe(payments => {
        let response = payments.json();
       this.payments=response.payments;
       console.log('isi pendaftaran',this.payments);
      if ( this.payments != null) {
        this.panjang =  this.payments.length;
        console.log("cek ada arry", this.panjang);
        for (var i = 0; i < this.panjang; i++) {
          if (this.data.id == this.payments[i].id_event && this.payments[i].status!="cancel") {
            this.absen = false;
            console.log("absen : ", this.absen);
          }
        }
      }
      if (this.absen == false) {
        this.showcheckin = false;
        this.showcancel = true;
        // console.log("show ", this.showcancel, this.showcheckin);
      } else {
        this.showcheckin = true;
        this.showcancel = false;
        // console.log("show ", this.showcancel, this.showcheckin);
      }
    });
   
  }

  ionViewDidLoad() {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    this.http
      .get(
        "https://nareeapp.com/api/get-payments-by-iduser/" + this.profiles.id,
        options
      )
      .subscribe(payments => {
        let response = payments.json();
       this.payments=response.payments;
       console.log('isi pendaftaran',payments);
      });
      
    this.http
      .get(
        "https://nareeapp.com/api/users/" + this.profiles.id + "/edit",
        options
      )
      .subscribe(userss => {
        let response = userss.json();
        // let response = userss;
        this.user = response.currentuser;
        this.expuser = this.user.exp;
      });
    // console.log("mapref?",this.mapRef);
    this.nama = this.data.name_event;
    this.tipe = this.data.dance_type;
    this.location = this.data.location;
    this.province = this.data.province;
    this.idevent = this.data.id;
    this.tanggal = this.data.date_event;
    this.isi = this.data.description;
    this.org = this.data.organizer;
    this.foto_poster = this.data.poster;
    this.duration = this.data.duration;
    this.longtitude = this.data.long;
    this.lattitude = this.data.lat;
    this.exp = this.data.exp;
    this.rating = this.data.rating;
    this.tiket = this.data.ticket_price;
    this.any_register = this.data.any_register;
    this.showMap(this.lattitude, this.longtitude);

    // if (this.tiket==null);
    this.ratings = 3.5;
    this.bintang = 5;
    // console.log("awal rating", this.ratings);
    // for (var i = 0; i < 5; i++) {
    //   if (this.ratings >= 1) this.bintang.push(1);
    //   else if (this.ratings >0) this.bintang.push(2);
    //   else this.bintang.push(3);
    //   console.log("rating: ", this.ratings);
    //   this.ratings = this.ratings - 1;
    // };
    this.x = JSON.stringify(this.bintang);
    // console.log("isi array bintang", this.x);
    console.log("evennya ni", this.data);
    if (this.tiket == null) {
      this.free = true;
      this.bayar = false;
    }
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    this.http
      .get("https://nareeapp.com/api/get-categories/" + this.idevent, options)
      .subscribe(kategori => {
        this.kategoris = kategori.json();
        console.log("kategorii", this.kategoris.categories);
        loading.dismiss();
        // let response = userss;
        // this.user = response.currentuser;?
        // this.expuser = this.user.exp;
      },
      error => {
        alert("Check your connection and try again");
        console.log("error get data", error);
        loading.dismiss();
      });
  }
  closeModal() {
    this.navCtrl.pop();
  }
  getTicketListByCurrentUser() {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http
        .get(this.getApiPaymentbyUser + this.user.id,options)
        .subscribe(payment => {
          resolve(payment.json());
        });
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
  showMap(long, lat) {
    //location lang longtitude
    const location = new google.maps.LatLng(long, lat);
    // map options
    const options = {
      center: location,
      zoom: 15
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }
  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
  // dibawah kodingan untuk mengupload dan disable button
  checkout() {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });
    let contentHeaders = new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let masukan = {
      id_user: this.profiles.id,
      id_event: this.data.id,
      kehadiran: "1"
    };
    this.http
      .post("https://nareeapp.com/api/post-kehadiran", masukan, options)
      .subscribe(data => {
        let response = data.json();
        console.log("ini kehadiran", response);
      });

    this.storage.get("eventcheckin").then(data => {
      if (data != null) {
        data.push(this.idevent);
        this.storage.set("eventcheckin", data);
      } else {
        let array = [];
        array.push(this.idevent);
        this.storage.set("eventcheckin", array);
      }
    });
    let masuk = {
      id: this.profiles.id,
      name: this.profiles.name,
      email: this.profiles.email,
      username: this.profiles.username,
      gender: this.profiles.gender,
      birthdate: this.profiles.birthdate,
      occupation: this.profiles.occupation,
      photo: this.profiles.photo,
      no_hp: this.profiles.no_hp,
      about_me: this.profiles.about_me,
      team: this.profiles.team,
      exp: this.profiles.exp,
      dance_type: this.profiles.dance_type,
      level: this.profiles.level
    };
    localStorage.setItem("currentUser", JSON.stringify(masuk));
    this.navCtrl.push(CheckinEventPage);
  }

  checkin() {
    console.log("kategorisModal", this.kategoris.categories);
    console.log("data", this.data);
    this.navCtrl.push(RegistrasieventPage, {
      categories: this.kategoris.categories,
      event: this.data
    });
  }
}
