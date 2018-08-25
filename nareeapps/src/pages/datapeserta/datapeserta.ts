import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { KonfirmasipendaftaranPage } from "../konfirmasipendaftaran/konfirmasipendaftaran";
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the DatapesertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-datapeserta",
  templateUrl: "datapeserta.html"
})
export class DatapesertaPage {
  tipetiket: any;
  event: any;
  categories: any;
  user: any;
  totalBiaya: any;
  member = [];
  a = [];
  angka:number;
  b =[];
  nama_tim=[];
  name_a = [];
  name_b = [];
  telFormGroup: FormGroup;
  name_member = [];
  tipe: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.telFormGroup = new FormGroup({
      'namatim': new FormControl('', Validators.required),
      'anggota': new FormControl('', Validators.required),     
  });
  }

  ionViewDidLoad() {
    this.categories = this.navParams.get("categories");
    this.totalBiaya = this.navParams.get("biayaTotal");
    this.event = this.navParams.get("event");
    this.tipetiket = this.navParams.get("tipetiket");
    this.tipe = this.navParams.get("tipe");
    
    for (var x = 0; x < this.tipe.length; x++) {
      let num = 1;
      this.nama_tim[x]=null;
      this.b = [];
      this.name_b = [];
      for (var y = 0; y < this.tipe[x].max; y++) {
        this.b[y] = num;
        this.name_b[y] = null;
        num++;
        console.log(
          "b:",
          this.b
        );
      }
      this.member[x] = this.b;
        this.name_member[x] = this.name_b;
        console.log(
              "isi name 1",
              this.member
            );
    }
    
    console.log(
      "isi name 1",
      this.member
    );
    // for (var x = 0; x < this.tipe.length; x++) {
    //   let num = 1;
    //   this.a=[]
    //   this.name_a=[]
    //   for (var y = 0; y < this.tipe[x].max; y++) {
    //     this.a[y] = num;
    //     this.name_a[y] = null;
    //     num++;
    //     console.log(
    //       "isi name",
    //       this.a
    //     );
    //   }
    //   this.b[x]= this.a;
    //   this.name_b[x]= this.name_a;
    //   console.log(
    //     "isi name 1",
    //     this.b
    //   );
    // }
    console.log("tipetiket", this.tipe);
    console.log("categories", this.categories);
    console.log("b", this.b);
    this.getCurrentUser();
    console.log(this.getCurrentUser());
  }
  next() {
    console.log("biodata", this.telFormGroup.value);
    console.log("biodata1", this.user.team);
    console.log("biodata2", this.user.username);
    console.log("biodata3", this.user.email);
    console.log("biodata4", this.nama_tim);
    for (var y = 0; y < this.name_member.length; y++) {
      console.log("nama member", y + this.name_member[y]);
    }
    // console.log("biodata6", this.user.);
    // console.log("biodata7", this.user.);
    // console.log("biodata8", this.user.);
    this.navCtrl.push(KonfirmasipendaftaranPage, {
      shadowPayment: {
        tipe : this.tipe,
        id_event: parseInt(this.event.id),
        tipetiket : this.tipetiket,
        totalBiaya: this.totalBiaya,
        team: this.nama_tim,
        username: this.user.username,
        name_event: this.event.name_event,
        // categories: this.categories,
        name_member: { username: this.name_member },
        no_hp: this.user.no_hp,
        email: this.user.email
      }
    });
  }
  getCurrentUser() {
    return (this.user = JSON.parse(localStorage.getItem("currentUser")));
  }
  onSubmit(values){
console.log("ini kelar",this.telFormGroup.value)  }
}
