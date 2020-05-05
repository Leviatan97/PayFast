import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';


const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  },
  {
    path: 'r1',
    loadChildren: () => import('../Registro/r1/r1.module').then( m => m.R1PageModule)
  },
  {
    path: 'r2',
    loadChildren: () => import('../Registro/r2/r2.module').then( m => m.R2PageModule)
  },
  {
    path: 'r3',
    loadChildren: () => import('../Registro/r3/r3.module').then( m => m.R3PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
