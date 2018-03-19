import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
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
longtitude:any;
lattitude:any;
@ViewChild('map') mapRef: ElementRef;
  constructor(private http:Http,public navCtrl: NavController,public viewCtrl : ViewController,public navParams : NavParams) {
  
  }

  ionViewDidLoad() {
  
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
    this.navCtrl.push(CheckinEventPage);
  }
}
