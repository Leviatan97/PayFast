import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilmodalPage } from './perfilmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilmodalPageRoutingModule {}
