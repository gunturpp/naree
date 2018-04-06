import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController,ToastController, AlertController,  ActionSheetController , Platform, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers,RequestOptions } from '@angular/http';
import { CheckinEventPage } from '../checkin-event/checkin-event';
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
data: any;
nama: any;
tipe: any;
location: any;
province:any;
tanggal:any;
isi:any;
org:any;
foto_poster:any;
duration:any;
tiket:any;
longtitude:any;
lattitude:any;
profiles:any;
exp:any;
expuser:any;
jumlahexp:any;
user:any;
@ViewChild('map') mapRef: ElementRef;
  constructor(private http:Http,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,public viewCtrl : ViewController,public navParams : NavParams) {
      this.profiles = JSON.parse(localStorage.getItem('currentUser'));
  }

  ionViewDidLoad() {
    this.http.get("http://nareeapp.com/api/users/"+this.profiles.id +"/edit").subscribe( userss => {
      let response = userss.json();
      // let response = userss;
      this.user = response.currentuser;
      this.expuser  = this.user.exp;
  });
    console.log(this.mapRef);
  this.data = this.navParams.get('event');
  this.nama = this.data.name_event;
  this.tipe = this.data.dance_type;
this.location = this.data.location;
this.province = this.data.province;
this.tanggal = this.data.date_event;
this.isi = this.data.description;
this.org = this.data.organizer;
this.foto_poster = this.data.poster;
this.duration = this.data.duration;
this.longtitude =this.data.long;
this.lattitude =this.data.lat;
this.exp =this.data.exp;
this.tiket=this.data.ticket_price;
this.showMap(this.longtitude,this.lattitude);
console.log(this.data);
  }
  closeModal(){
    this.viewCtrl.dismiss();
   }
   showMap(long,lat){
     //location lang longtitude
     const location = new google.maps.LatLng(long,lat);
     // map options
     const options ={
      center:location,
      zoom:15
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,map);
  }
   addMarker(position, map){
     return new google.maps.Marker({
       position,
       map
     })
   }
   
   checkin() {
    let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let input = ({
      id_user:this.profiles.id,
      judul:this.nama,
      exp:this.exp,
    });
      this.http.post("http://nareeapp.com/api/post-history",input).subscribe(data => {
        let response = data.json();
      console.log(response);  
    });
    this.jumlahexp=this.expuser+this.exp;
      let add = ({
        exp:this.jumlahexp,
      });
      this.http.put("http://nareeapp.com/api/users/"+this.profiles.id +"/update",add).subscribe(user => {
        let response = user.text;
    });
    this.navCtrl.push(CheckinEventPage);
  }
  
}
