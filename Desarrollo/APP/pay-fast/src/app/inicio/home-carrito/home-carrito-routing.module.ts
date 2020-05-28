import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCarritoPage } from './home-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCarritoPageRoutingModule {}
