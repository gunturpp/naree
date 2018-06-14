import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiketPage } from './tiket';

@NgModule({
  declarations: [
    TiketPage,
  ],
  imports: [
    IonicPageModule.forChild(TiketPage),
  ],
})
export class TiketPageModule {}
