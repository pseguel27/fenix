import { Injectable, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeportivoFenixServiceProvider } from '../../providers/deportivo-fenix-service/deportivo-fenix-service';
import { HttpClient } from '@angular/common/http'; 
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[DeportivoFenixServiceProvider]
})


export class ListPage {

  DeportivoFenixServiceProvider: any;
  newsData: any;

  constructor(public navCtrl: NavController, public deportivoFenixServiceProvider: DeportivoFenixServiceProvider) 
  {

  }
  
  
  ngOnInit(){
     this.newsData = this.deportivoFenixServiceProvider.getJsonData().then();
     console.log(this.newsData.series);
  }



  /*
  getdata(){
    this.loading.present();
    this.DeportivoFenixServiceProvider.flatMap(
      result => {
        this.newsData=result.data.children;
        console.log("Success : "+this.newsData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );
  }
  */
}