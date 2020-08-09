import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TycPage } from './tyc.page';

const routes: Routes = [
  {
    path: '',
    component: TycPage
  },
  {
    path: 'home-tyc',
    loadChildren: () => import('./home-tyc/home-tyc.module').then( m => m.HomeTycPageModule)
  },
  {
    path: 'home-alu',
    loadChildren: () => import('./home-alu/home-alu.module').then( m => m.HomeAluPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TycPageRoutingModule {}
