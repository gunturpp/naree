import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, ToastController, AlertController, ActionSheetController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CheckinEventPage } from '../checkin-event/checkin-event';
import { Storage } from '@ionic/storage';
declare var google: any;


// **
//  * Generated class for the ShoweventPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

@Component({
  selector: 'page-showevent',
  templateUrl: 'showevent.html',
})


export class ShoweventPage {
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
  exp: number;
  expuser: number;
  jumlahexp: number;
  rating: number;
  bintang: any;            //nilai array rating
  ratings: any;             //nilai rating yang di get dari DB
  absen: boolean = true;
  idevent: any;
  panjang: any;
  free: boolean = false;
  items: any;
  showcheckin: boolean = true;
  showcancel: boolean = false;

  @ViewChild('map') mapRef: ElementRef;
  constructor(private http: Http,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.profiles = JSON.parse(localStorage.getItem('currentUser'));
    this.historyExp = JSON.parse(localStorage.getItem("expHistory"));
    this.storage.get('eventcheckin').then((data) => {
      this.items = data;
      if (data != null) {
        this.panjang = data.length;
        console.log("cek ada arry", data);

        for (var i = 0; i < this.panjang; i++) {
          if (this.idevent == this.items[i]) {
            this.absen = false;
            console.log("absen : ", this.absen)
          }
        }
      }
      if (this.absen == false) {
        this.showcheckin = false;
        this.showcancel = true;
        console.log("show ", this.showcancel, this.showcheckin);
      }
      else {
        this.showcheckin = true;
        this.showcancel = false;
        console.log("show ", this.showcancel, this.showcheckin);
      }
    });

  }

  ionViewDidLoad() {

    this.http.get("https://nareeapp.com/api/users/" + this.profiles.id + "/edit").subscribe(userss => {
      let response = userss.json();
      // let response = userss;
      this.user = response.currentuser;
      this.expuser = this.user.exp;
    });
    console.log(this.mapRef);
    this.data = this.navParams.get('event');
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
    this.rating= this.data.rating;
    this.tiket = this.data.ticket_price;
    this.showMap(this.longtitude, this.lattitude);
    // if (this.tiket==null);
    this.ratings = 3.5;
    this.bintang=5;
    console.log("awal rating", this.ratings);
    // for (var i = 0; i < 5; i++) {
    //   if (this.ratings >= 1) this.bintang.push(1);
    //   else if (this.ratings >0) this.bintang.push(2);
    //   else this.bintang.push(3);
    //   console.log("rating: ", this.ratings);
    //   this.ratings = this.ratings - 1;
    // };
    this.x = JSON.stringify(this.bintang);
    console.log("isi array bintang", this.x);
    console.log(this.data);
    if (this.tiket == null) {
      this.free = true;
      this.bayar = false;
    };

  }
  closeModal() {
    this.viewCtrl.dismiss();
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
    })
  }

  checkin() {
    let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let input = ({
      id_user: this.profiles.id,
      judul: this.nama,
      exp: this.exp,
    });
    this.http.post("https://nareeapp.com/api/post-history", input).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.historyExp.push(response.success);
      console.log("ini hasil checkin",this.historyExp);
    });
    let masukan = ({
      id_user: this.profiles.id,
      id_event: this.data.id,
      kehadiran: "1",
    });
    this.http.post("https://nareeapp.com/api/post-kehadiran", masukan).subscribe(data => {
      let response = data.json();
      console.log("ini kehadiran", response);
    });

    this.jumlahexp = parseInt(this.expuser.toString()) + parseInt(this.exp.toString());
    let add = ({
      exp: this.jumlahexp,
    });
    this.http.put("https://nareeapp.com/api/users/" + this.profiles.id + "/update", add).subscribe(user => {
      let response = user.text;
    });
    this.storage.get('eventcheckin').then((data) => {
      if (data != null) {
        data.push(this.idevent);
        this.storage.set('eventcheckin', data);
      }
      else {
        let array = [];
        array.push(this.idevent);
        this.storage.set('eventcheckin', array);
      }
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
    this.navCtrl.push(CheckinEventPage);
  }

}
