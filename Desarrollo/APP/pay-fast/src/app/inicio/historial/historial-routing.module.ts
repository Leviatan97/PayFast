import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPage } from './historial.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPage
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPageRoutingModule {}
