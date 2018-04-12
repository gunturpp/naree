import { Component } from "@angular/core";
import {
  NavController,
  ActionSheetController,
  LoadingController,
  AlertController,
  ToastController
} from "ionic-angular";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http, Headers, RequestOptions } from "@angular/http";
import { MorePage } from "../more/more";
import { Camera , CameraOptions} from "@ionic-native/camera";
import { HomePage } from "../home/home";
// let getApiEvent = "https://nareeapp.com/api/get-users";

@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  imageURI:any;
  imageFileName:any;
  base64Image: string;
  profil: string;
  profiles: any;
  profile: any;
  validFoto = false;
  image: string;
  nama: any;
  kategori: any;
  level: any;
  gender: any;
  email: any;
  hp: any;
  about: any;
  achiev: any;
  usrname: any;
  users: any;
  user: any;

  constructor(
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private transfer: FileTransfer,
    private http: Http,
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
    // this.profile = JSON.stringify(this.profiles.currentuser);
    // this.profil = JSON.parse(this.profile);
  }
  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: "Tunggu sebentar..."
    });
    loading.present();
    console.log(this.profiles);
    this.http
      .get("https://nareeapp.com/api/users/" + this.profiles.id + "/edit")
      .subscribe(userss => {
        let response = userss.json();
        // let response = userss;
        this.users = response;
        this.user = this.users.currentuser;
        this.nama = this.user.name;
        this.usrname = this.user.username;
        this.kategori = this.user.dance_type;
        this.level = this.user.level;
        this.email = this.user.email;
        this.image = "https://nareeapp.com/" + this.user.photo;
        // this.image = "assets/photoprofile/default.png";
        this.about = this.user.about_me;
        // console.log("ini hasilnya" + JSON.stringify(this.user));
        console.log(this.user);
        if (response.status == "200") {
          this.users = response.data; //ini disimpen ke variabel pasien diatas itu ,, yang udah di declare
        }
      });
    //   manggil semua user
    //   this.http.get(getApiEvent).subscribe(users =>{
    //     let response = users.json();
    //     this.userss = response.users;
    //     console.log(this.userss);
    //   })
    loading.dismiss();
  }
  ionViewWillEnter() {
    this.profiles = JSON.parse(localStorage.getItem("currentUser"));
  }
  gotoNextPage() {
    this.navCtrl.push(MorePage);
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Foto Telah di Update',
      message: 'Terima Kasih',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.SavePhoto();
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
        correctOrientation: true,
        saveToPhotoAlbum: true,
        cameraDirection: 0,
        targetWidth: 600,
        targetHeight: 600
      })
      .then(
        imageData => {
          this.base64Image = "data:image/png;base64," + imageData;
          this.image = this.base64Image;
          this.showConfirm();
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
        targetHeight: 600,
        correctOrientation: true
      })
      .then(
        imageData => {
          this.base64Image = "data:image/png;base64," + imageData;
          this.image = this.base64Image;
          this.showConfirm();
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
    let contentHeaders = new Headers();
    contentHeaders.append( 'Content-Type', 'application/json' );
    let masuk = {
      photo: this.base64Image
    };
    this.http
      .put("https://nareeapp.com/api/users/" + this.profiles.id + "/update",masuk, { headers : contentHeaders}
      )
      .subscribe(user => {
        let response = user;
        console.log("ress",response);
        console.log("base64 masuk",masuk.photo);
        
        // localStorage.setItem("currentUser", JSON.stringify(masuk));
      });
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}