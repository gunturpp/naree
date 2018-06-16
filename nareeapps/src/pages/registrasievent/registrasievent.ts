import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatapesertaPage } from '../datapeserta/datapeserta';
import { Http } from '@angular/http';


/**
 * Generated class for the RegistrasieventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrasievent',
  templateUrl: 'registrasievent.html',
})
export class RegistrasieventPage {

  dataTickets: boolean;
  tipetiket: {};
  tickets: any;
  apiTicket = 'https://nareeapp.com/api/get-tickettype';
  categories: any;
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    // all categories by event
    this.categories = this.navParams.get("categories");

    this.getApiTicket().then(data =>{
      this.tipetiket = data;
      // for(let i=0; i<data.length; i++){
      //   for(let j=0; j<this.categories.length; j++){
      //     if(data[i].id_category == this.categories[j].id)
      //     console.log("bisa");
      //   }
      // }
    });
  }
  getApiTicket(){
    return new Promise(resolve =>{
      this.http.get(this.apiTicket).subscribe( tickets => {
        this.tickets = tickets.json();
        resolve(this.tickets.tickets);
      });
    })
  }
  checklist(signTicket,i){
    console.log('checklist?:',signTicket + this.dataTickets);
  }
  next(){
    this.navCtrl.push(DatapesertaPage);
  }
}
