import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinDailyPage } from './checkin-daily';

@NgModule({
  declarations: [
    CheckinDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinDailyPage),
  ],
})
export class CheckinDailyPageModule {}
