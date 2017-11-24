import { HttpClient } from '@angular/common/http'; 
import { Injectable, Component } from '@angular/core';
import { Response } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the DeportivoFenixServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeportivoFenixServiceProvider {

  	series: any;

	constructor(public http: HttpClient) {
  	}

  	getJsonData(){
		return this.http.get('http://localhost:3000/Series')
			.subscribe(data =>{
				this.series = data;
				console.log(this.series);
		}) 		
  	}

/*
	load() {
    	console.log('json called');
    	return new Promise(resolve => {
        	this.http.get('http://localhost:3000/Series').map(response => {
            	resolve(this.series);
        	});
    	});
	}

*/

	/*this.http.get('http://localhost:3000/Series')
          .map(res => res.json())
          .subscribe(data => {
            Object.keys(data).forEach(posts => {
              console.log(data);
            });
          });
	*/
}