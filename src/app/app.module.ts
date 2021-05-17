//imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; //json file reading from gttp. Could not for the life of me get it to work. always said that that it couldnt find http client when i was using it on the component page. 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; //ionic module

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { Geolocation } from '@ionic-native/geolocation/ngx'; //geo location import
import { IonicStorageModule } from '@ionic/storage'; //ionic data persistance

//ng module for imports above
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),],
  providers: [Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
