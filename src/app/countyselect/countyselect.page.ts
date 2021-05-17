//imports
import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-countyselect',
  templateUrl: './countyselect.page.html',
  styleUrls: ['./countyselect.page.scss'],
})
export class CountyselectPage implements OnInit {
countyStatus:String = "undefined";
  constructor(private storage:Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get("county")
    .then((data)=>{
      this.countyStatus=data;
    })
    .catch()
  }

  //data persistance saving county
  updateCounty(){
    this.storage.set('county',this.countyStatus)
    .then(()=>{
      this.navCtrl.navigateBack('/home')
    })
    .catch()
  }
}
