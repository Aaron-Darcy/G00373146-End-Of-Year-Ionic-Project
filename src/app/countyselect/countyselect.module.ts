import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountyselectPageRoutingModule } from './countyselect-routing.module';

import { CountyselectPage } from './countyselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountyselectPageRoutingModule
  ],
  declarations: [CountyselectPage]
})
export class CountyselectPageModule {}
