import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RsupermercadoPage } from './rsupermercado.page';

const routes: Routes = [
  {
    path: '',
    component: RsupermercadoPage
  },
  {
    path: 'rtienda',
    loadChildren: () => import('../../Inicio/Rsupermercado/rtienda/rtienda.module').then( m => m.RtiendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
          ],
  exports: [RouterModule],
})
export class RsupermercadoPageRoutingModule {}
