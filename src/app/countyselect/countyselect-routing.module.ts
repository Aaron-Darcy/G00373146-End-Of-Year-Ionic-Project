import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountyselectPage } from './countyselect.page';

const routes: Routes = [
  {
    path: '',
    component: CountyselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountyselectPageRoutingModule {}
