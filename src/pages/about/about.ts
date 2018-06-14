import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private http: HTTP) {
      
  }
  getRequest(){ 
    console.log("get");
    this.http.get('http://192.168.1.129:3000/provaGet', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  postRequest(){
    console.log("post");
    this.http.post('http://192.168.1.129:3000/provaPost', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  googleRequest(){      //per prova da console ionic
    this.http.get('https://google.com/search?', {q: "Capaccio"}, { Authorization: "OAuth2: token" })
    .then(data => {
      console.log(data.status);
      //console.log(data.data); // data received by server commentato perchè restituisce troppi dati
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    }); 
    console.log("google");
  }

  
}
