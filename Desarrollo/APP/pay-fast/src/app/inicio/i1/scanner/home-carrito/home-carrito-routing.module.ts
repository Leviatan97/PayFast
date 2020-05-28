import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCarritoPage } from './home-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCarritoPage
  },
  {
    path: 'home-metodo',
    loadChildren: () => import('./home-metodo/home-metodo.module').then( m => m.HomeMetodoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCarritoPageRoutingModule {}
