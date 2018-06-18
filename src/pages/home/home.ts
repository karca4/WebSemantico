import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AmbientaliPage } from '../ambientali/ambientali';
import { CulturaliPage } from '../culturali/culturali';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }


  getAmbientali() {
   this.navCtrl.push(AmbientaliPage);
  }

  getCulturali() {
    this.navCtrl.push(CulturaliPage);
  }

}
