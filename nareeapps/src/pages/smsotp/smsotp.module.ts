import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsotpPage } from './smsotp';

@NgModule({
  declarations: [
    SmsotpPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsotpPage),
  ],
})
export class SmsotpPageModule {}
