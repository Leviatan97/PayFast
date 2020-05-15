import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilcmodalPage } from './perfilcmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilcmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilcmodalPageRoutingModule {}
