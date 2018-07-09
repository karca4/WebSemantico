import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the JenaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JenaProvider {
  private server = 'http://172.19.63.131:3000/';

  constructor(private http: HTTP) {
    console.log('Hello JenaProvider Provider');
  }

  getArchitettura(){
    return this.http.get(this.server+'getArchitettura', {}, {}) 
  }

  getArcheologia(){
    return this.http.get(this.server+'getArcheologia', {}, {}) 
  }

  getMusei(){
    return this.http.get(this.server+'getMusei', {}, {}) 
  }

  getChiese(){
    return this.http.get(this.server+'getChiese', {}, {}) 
  }

  getMonumenti(){
    return this.http.get(this.server+'getMonumenti', {}, {}) 
  }

  getCoordinate(){
    return this.http.get(this.server+'getCoordinate', {}, {}) 
  }

  search(){
    return this.http.get(this.server+'search', {}, {}) 
  }


  // postRequest(){
  //   console.log("post");
  //   this.http.post(this.server+'provaPost', {}, {})
  //   .then(data => {
  //     console.log(data.status);
  //     console.log(data.data); // data received by server
  //     console.log(data.headers);
  //   })
  //   .catch(error => {
  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  //   });
  // }

  // googleRequest(){      //per prova da console ionic
  //   this.http.get(this.server+'rube', {}, {})
  //   .then(data => {
  //     console.log(data.status);
  //     console.log(data.data); // data received by server commentato perchè restituisce troppi dati
  //     console.log(data.headers);
  //   })
  //   .catch(error => {
  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  //   }); 
  //   console.log("jena");
  // }


}
