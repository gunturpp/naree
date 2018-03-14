
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  posts: string ='posts';
  rootUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }
getPosts(){
 return this.http.get(`${this.rootUrl}/${this.posts}`).map(res => res.json()).take(1);
}
}
