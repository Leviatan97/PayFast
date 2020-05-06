import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTutPage } from './home-tut.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTutPageRoutingModule {}
