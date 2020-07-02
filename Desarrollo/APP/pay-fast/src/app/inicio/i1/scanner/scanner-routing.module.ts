import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerPage } from './scanner.page';
import { SupermercadoGuard } from 'src/app/guards/supermercado.guard';

const routes: Routes = [
  {
    path: '',
    component: ScannerPage
  },
  {
    path: 'home-carrito',
    loadChildren: () => import('./home-carrito/home-carrito.module').then( m => m.HomeCarritoPageModule),
    canActivate: [SupermercadoGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerPageRoutingModule {}
