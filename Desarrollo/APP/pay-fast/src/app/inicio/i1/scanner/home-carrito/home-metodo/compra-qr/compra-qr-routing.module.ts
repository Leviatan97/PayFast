import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraQrPage } from './compra-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CompraQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraQrPageRoutingModule {}
