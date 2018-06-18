import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArchitetturaPage } from '../architettura/architettura';
import { ArcheologiaPage } from '../archeologia/archeologia';
import { MuseiPage } from '../musei/musei';
import { StoriaArtePage } from '../storia-arte/storia-arte';

/**
 * Generated class for the CulturaliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-culturali',
  templateUrl: 'culturali.html',
})
export class CulturaliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CulturaliPage');
  }


  getArchitettura() {
    this.navCtrl.push(ArchitetturaPage);
   }
   
   
   getArcheologia() {
    this.navCtrl.push(ArcheologiaPage);
   }

   getMusei(){
     this.navCtrl.push(MuseiPage);
   }

   getStoriaArte(){
    this.navCtrl.push(StoriaArtePage);
   }
}
