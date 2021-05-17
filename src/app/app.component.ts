import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http:HttpClient) {}
 
  getWeatherData(){
   return this.http.get("https://www.met.ie/Open_Data/json/National.json") //getting weather from irish weather .json URL
  }
}
