import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOfertasPage } from './home-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: HomeOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOfertasPageRoutingModule {}
