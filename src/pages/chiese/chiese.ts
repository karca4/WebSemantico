import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JenaProvider } from '../../providers/jena/jena';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ChiesePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chiese',
  templateUrl: 'chiese.html',
})
export class ChiesePage {
  private array = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams,private jena: JenaProvider,private iab: InAppBrowser) {
    this.jena.getChiese().then((data) => {
      var el = document.createElement('html');
      el.innerHTML = data.data;
      var length = el.getElementsByTagName('uri').length;
      for(let i=0; i<length;i++){
        this.array.push(el.getElementsByTagName('uri').item(i).textContent.substr(28));
      }
    }).catch((errore) => {
      console.log(errore);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChiesePage');
  }

  dettagli(element:string): boolean {
    this.iab.create("http://dbpedia.org/resource/"+element);
    return false;
  }

}
