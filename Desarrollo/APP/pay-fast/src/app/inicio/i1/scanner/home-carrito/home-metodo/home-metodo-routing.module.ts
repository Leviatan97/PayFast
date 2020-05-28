import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMetodoPage } from './home-metodo.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMetodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMetodoPageRoutingModule {}
