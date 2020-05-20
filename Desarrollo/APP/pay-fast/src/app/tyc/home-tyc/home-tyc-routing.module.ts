import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTycPage } from './home-tyc.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTycPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTycPageRoutingModule {}
