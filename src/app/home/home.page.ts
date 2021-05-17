import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
lat:any;
long:any;
  constructor(private geolocation: Geolocation) {}

  //Geolocation
GPS(){
  this.geolocation.getCurrentPosition().then((resp) => {
   this.lat = resp.coords.latitude;
    this.long =resp.coords.longitude;
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }
}

/*this.AppComponent.getWeatherData().subscribe(data =>{
    console.log("Remote Data:");
    console.log(data);
}); */
//couldnt get the json to read properly again at the end. kept having trouble importing and calling it. 