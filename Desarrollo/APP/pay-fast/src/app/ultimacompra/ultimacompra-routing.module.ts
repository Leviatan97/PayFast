import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimacompraPage } from './ultimacompra.page';

const routes: Routes = [
  {
    path: '',
    component: UltimacompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimacompraPageRoutingModule {}
