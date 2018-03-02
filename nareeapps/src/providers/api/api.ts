import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  getApiEvent:any;
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  apiEvent()
  {
    this.getApiEvent = "http://127.0.0.1:8000/api/get-events";
    console.log(this.getApiEvent);
  }

}
