import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChiesePage } from './chiese';

@NgModule({
  declarations: [
    ChiesePage,
  ],
  imports: [
    IonicPageModule.forChild(ChiesePage),
  ],
})
export class ChiesePageModule {}
