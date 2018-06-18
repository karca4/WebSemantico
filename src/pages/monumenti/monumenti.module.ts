import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentiPage } from './monumenti';

@NgModule({
  declarations: [
    MonumentiPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentiPage),
  ],
})
export class MonumentiPageModule {}
