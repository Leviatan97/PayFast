import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'rsupermercado',
    loadChildren: () => import('../Inicio/rsupermercado/rsupermercado.module').then( m => m.RsupermercadoPageModule)
  },  {
    path: 'inicio-s',
    loadChildren: () => import('./inicio-s/inicio-s.module').then( m => m.InicioSPageModule)
  },
  {
    path: 'inicio-t',
    loadChildren: () => import('./inicio-t/inicio-t.module').then( m => m.InicioTPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
