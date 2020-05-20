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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TycPageRoutingModule {}
