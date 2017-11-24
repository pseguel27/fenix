import { BrowserModule }  from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablaPage } from '../pages/tabla/tabla';
import { ResultadosPage } from '../pages/resultados/resultados';
import { GoleadoresPage } from '../pages/goleadores/goleadores';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeportivoFenixServiceProvider } from '../providers/deportivo-fenix-service/deportivo-fenix-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TablaPage,
    ResultadosPage,
    GoleadoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TablaPage,
    ResultadosPage,
    GoleadoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeportivoFenixServiceProvider
  ]
})
export class AppModule {}