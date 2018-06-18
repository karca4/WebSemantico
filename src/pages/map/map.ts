import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JenaProvider } from '../../providers/jena/jena';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  //For map
  @ViewChild('map') mapRef: ElementRef;

  map: any;
  private markers = [];
  private markerCluster: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jena: JenaProvider,private iab: InAppBrowser) {

  }

  ionViewDidLoad() {
    const location = new google.maps.LatLng(41.89193, 12.51133);
    const options = {
      center: location,
      zoom: 11,
      minZoom: 5
    }
    //creo la mappa con le opzioni specificate sopra
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.markerCluster = new MarkerClusterer(this.map, this.markers,
      { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    this.jena.getCoordinate().then((data) => {
      var el = document.createElement('html');
      el.innerHTML = data.data;
      var length = el.getElementsByTagName('uri').length;
      for (let i = 0; i < length; i++) {
        // console.log(el.getElementsByTagName('uri').item(i).textContent.substr(28)+ " "+el.getElementsByTagName('literal').item(i).textContent);
        var location = el.getElementsByTagName('literal').item(i).textContent.split(' ');
        var loc = new google.maps.LatLng(location[0], location[1]);
        var marker = new google.maps.Marker({
          position: loc
        });
        marker.addListener('click', () => {
          this.dettagli(el.getElementsByTagName('uri').item(i).textContent.substr(28));
        });
        this.markers.push(marker);
        this.markerCluster.addMarker(marker);
      }
    }).catch((errore) => {
      console.log(errore);
    });
  }



  dettagli(element:string): boolean {
    this.iab.create("http://dbpedia.org/resource/"+element);
    return false;
  }   
}
