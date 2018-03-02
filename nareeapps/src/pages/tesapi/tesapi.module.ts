import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesapiPage } from './tesapi';

@NgModule({
  declarations: [
    TesapiPage,
  ],
  imports: [
    IonicPageModule.forChild(TesapiPage),
  ],
})
export class TesapiPageModule {}
