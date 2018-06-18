import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriaArtePage } from './storia-arte';

@NgModule({
  declarations: [
    StoriaArtePage,
  ],
  imports: [
    IonicPageModule.forChild(StoriaArtePage),
  ],
})
export class StoriaArtePageModule {}
