import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoweventPage } from './showevent';

@NgModule({
  declarations: [
    ShoweventPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoweventPage),
  ],
})
export class ShoweventPageModule {}
