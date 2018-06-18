import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChiesePage } from '../chiese/chiese';
import { MonumentiPage } from '../monumenti/monumenti';

/**
 * Generated class for the StoriaArtePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storia-arte',
  templateUrl: 'storia-arte.html',
})
export class StoriaArtePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriaArtePage');
  }

  getChiese() {
    this.navCtrl.push(ChiesePage);
  }

  getMonumenti() {
    this.navCtrl.push(MonumentiPage);
  }
}
