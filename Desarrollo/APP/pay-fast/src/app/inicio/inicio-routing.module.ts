import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'i1',
    loadChildren: () => import('./i1/i1.module').then( m => m.I1PageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfiltmodal',
    loadChildren: () => import('./perfiltmodal/perfiltmodal.module').then( m => m.PerfiltmodalPageModule)
  },
  {
    path: 'perfilatmodal',
    loadChildren: () => import('./perfilatmodal/perfilatmodal.module').then( m => m.PerfilatmodalPageModule)
  },
  {
    path: 'perfilcmodal',
    loadChildren: () => import('./perfilcmodal/perfilcmodal.module').then( m => m.PerfilcmodalPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'home-carrito',
    loadChildren: () => import('./home-carrito/home-carrito.module').then( m => m.HomeCarritoPageModule)
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
export class InicioPageRoutingModule {}
