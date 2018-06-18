import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArchitetturaPage } from '../pages/architettura/architettura';
import { ArcheologiaPage } from '../pages/archeologia/archeologia';
import { AmbientaliPage } from '../pages/ambientali/ambientali';
import { CulturaliPage } from '../pages/culturali/culturali';
import { MuseiPage } from '../pages/musei/musei';
import { StoriaArtePage } from '../pages/storia-arte/storia-arte';
import { ChiesePage } from '../pages/chiese/chiese';
import { MonumentiPage } from '../pages/monumenti/monumenti';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { JenaProvider } from '../providers/jena/jena';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    MapPage,
    ArchitetturaPage,
    AmbientaliPage,
    ArcheologiaPage,
    ChiesePage,
    MuseiPage,
    MonumentiPage,
    StoriaArtePage,
    CulturaliPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    MapPage,
    ArchitetturaPage,
    AmbientaliPage,
    MuseiPage,
    CulturaliPage,
    StoriaArtePage,
    ArcheologiaPage,
    MonumentiPage,
    ChiesePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JenaProvider
  ]
})
export class AppModule {}
