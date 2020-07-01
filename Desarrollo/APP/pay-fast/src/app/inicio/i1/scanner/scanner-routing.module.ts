import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerPage } from './scanner.page';

const routes: Routes = [
  {
    path: '',
    component: ScannerPage
  },  {
    path: 'home-carrito',
    loadChildren: () => import('./home-carrito/home-carrito.module').then( m => m.HomeCarritoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerPageRoutingModule {}
