import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { CheckinDailyPage } from '../checkin-daily/checkin-daily';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';
import { Http, Headers,RequestOptions } from '@angular/http';

/**
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
  pet: string = "level";
  profiles: any;
  history:any;
  panjang:any;
  riwayat:any;
  jumlah:any;
  persentase:any;
  nama:any;
  exp:any;
  constructor(public http: Http,
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.profiles = JSON.parse(localStorage.getItem('currentUser'));
      this.riwayat=[];
      this.jumlah=0;
      this.persentase=0;
      this.nama="Daily Check-in";
      this.exp=5;
    }
  ionViewDidLoad() {
    this.http.get("http://127.0.0.1:8000/api/get-history").subscribe( histories => {
      let response = histories.json();
      this.history = response.histories;
      this.panjang = this.history.length;
      console.log(this.panjang);
      console.log(this.profiles.id);
      for(var i=0,j=0; i<this.panjang;i++){
        if(this.history[i].id_user == this.profiles.id)
        {
           this.riwayat[j]=this.history[i];
        
           j++;
        }   
   }
      console.log(this.persentase);
    })
                  }
    ionViewWillEnter(){
      this.jumlah=0;
        this.http.get("http://127.0.0.1:8000/api/get-history").subscribe( histories => {
      let response = histories.json();
      this.history = response.histories;
      this.panjang = this.history.length;
      console.log(this.panjang);
      console.log(this.profiles.id);
      for(var i=0,j=0; i<this.panjang;i++){
        if(this.history[i].id_user == this.profiles.id)
        {
           this.riwayat[j]=this.history[i];
           this.jumlah+=this.history[i].exp;
           this.persentase=(this.jumlah/1500)*100;
           j++;
        }   
   }
      console.log(this.persentase);
    })
}
  // checkin() {
  //   this.navCtrl.push(CheckinDailyPage);
  // }
  openModal() {
    let contentHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let input = ({
      id_user:this.profiles.id,
      judul:this.nama,
      exp:this.exp,
    });
      this.http.post("http://127.0.0.1:8000/api/post-history",input).subscribe(data => {
        let response = data.json();
      console.log(response);  
    });
    const modal = this.modalCtrl.create(CheckinDailyPage);
    modal.present();
  }
}
