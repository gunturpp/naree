import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  ActionSheetController,
  LoadingController,
  AlertController,
  ToastController
} from "ionic-angular";
import * as moment from 'moment';
import { CheckinEventPage } from '../checkin-event/checkin-event';
// import 'moment/locale/pt-br';
/**
 * Generated class for the PembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {
  event: any;
  harga: any;
  base64Image: string;
  image: string;
  time: any;
  selisih: any;
  id: any;
  end: moment.Moment;
  timer=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    private camera: Camera,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private http: Http,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
    this.event = this.navParams.get("nama");
    this.id = this.navParams.get("id");
    this.harga = this.navParams.get("harga");
    this.time =  this.navParams.get("time");
    this.end =moment(this.time).add(6, 'hour')
    // var now = moment(new Date()); //todays date
    // var duration = moment.duration(this.end.diff(now));
    //  this.selisih =moment(this.time).format('dddd,D MMMM YYYY [pukul] h:mm');
    // this.selisih=duration;
    // console.log(duration)
    // date('Y-m-d', strtotime($request->start))
    // this.selisih= date('Y-m-d', strtotime($request->start))
   console.log("time",this.selisih);
   this.selisih='0:00:00';
   var intervalVar = setInterval(function(){
    var now = moment(new Date()); //todays date
    var a = moment.duration(this.end.diff(now));
    var seconds = moment.duration(a).seconds();
    var minutes = moment.duration(a).minutes();
    var hours = Math.trunc(moment.duration(a).asHours());
    if(seconds>=0)
    this.selisih=hours+':'+minutes+':'+seconds;
    else(this.selisih='0:00:00');
  }.bind(this),1000)
  }
  startTimer(){
    
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Foto Telah di Upload",
      message: "Terima Kasih",
      buttons: [
        {
          text: "Agree",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
  takePicture() {
    this.camera
      .getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.PNG,
        saveToPhotoAlbum: true,
        targetWidth: 600,
        targetHeight: 600
      })
      .then(
        imageData => {
          this.base64Image = "data:image/png;base64," + imageData;
          this.image = this.base64Image;
          this.SavePhoto();
         
        },
        err => {
          alert(err);
        }
      );
  }
  getPhotoFromGallery() {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
      })
      .then(
        imageData => {
          this.base64Image = "data:image/png;base64," + imageData;
          this.image = this.base64Image;
          this.SavePhoto();
         
        },
        err => {}
      );
  }
  uploadPicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Pilihan",
      buttons: [
        {
          text: "Ambil Gambar",
          role: "ambilGambar",
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: "Pilih Dari Galleri",
          role: "gallery",
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }

  SavePhoto() {
    let headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    let options = new RequestOptions({ headers: headers });

    let masuk = {
      nota: this.base64Image,
      status: "process"
    };
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    this.http
      .put(
        "https://nareeapp.com/api/payment/" + this.id + "/nota-update",
        masuk,
        options
      )
      .subscribe(user => {
        let response = user;
        console.log("ress", response);
        loading.dismiss();
        this.navCtrl.push(CheckinEventPage);
      });
  }
}
