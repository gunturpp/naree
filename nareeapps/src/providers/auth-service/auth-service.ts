import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';
  public loginState = false;
  constructor(public events: Events, public storage: Storage, public http: HttpClient) {}
  login(email, token, name) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('name', name);
    this.storage.set('email', email);
    // this.storage.set('domisili',domisili);
    // this.storage.set('gender',gender);
    // this.storage.set('hp',hp);
    // this.storage.set('status',status);
    // this.storage.set('birthdate',birthdate);
    // this.storage.set('role',role);
    this.events.publish('user:login');
    this.loginState = true;
  }
  signup(email) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('email',email);
    this.events.publish('user:signup');
  }
}
