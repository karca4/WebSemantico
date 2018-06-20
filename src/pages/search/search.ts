import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JenaProvider } from '../../providers/jena/jena';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  private array = new Array();
  private items = [];

  constructor(private jena: JenaProvider,private iab: InAppBrowser) {
    this.jena.search().then((data) => {
      var el = document.createElement('html');
      el.innerHTML = data.data;
      var length = el.getElementsByTagName('uri').length;
      for (let i = 0; i < length; i++) {
        this.array.push(el.getElementsByTagName('uri').item(i).textContent.substr(28));
      }
    }).catch((errore) => {
      console.log(errore);
    });
    this.initializeItems();
  }

  initializeItems() {
    this.items = this.array;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }    
  }

  dettagli(element:string): boolean {
    this.iab.create("http://dbpedia.org/resource/"+element);
    return false;
  }

}
