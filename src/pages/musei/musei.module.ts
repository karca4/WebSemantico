import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuseiPage } from './musei';

@NgModule({
  declarations: [
    MuseiPage,
  ],
  imports: [
    IonicPageModule.forChild(MuseiPage),
  ],
})
export class MuseiPageModule {}
