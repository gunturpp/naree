import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifcodePage } from './verifcode';

@NgModule({
  declarations: [
    VerifcodePage,
  ],
  imports: [
    IonicPageModule.forChild(VerifcodePage),
  ],
})
export class VerifcodePageModule {}
