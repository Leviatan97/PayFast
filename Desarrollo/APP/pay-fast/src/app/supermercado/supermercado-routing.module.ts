import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupermercadoPage } from './supermercado.page';

const routes: Routes = [
  {
    path: '',
    component: SupermercadoPage
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupermercadoPageRoutingModule {}
