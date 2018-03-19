import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinEventPage } from './checkin-event';

@NgModule({
  declarations: [
    CheckinEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinEventPage),
  ],
})
export class CheckinEventPageModule {}
