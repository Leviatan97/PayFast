import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioTPage } from './inicio-t.page';

const routes: Routes = [
  {
    path: '',
    component: InicioTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioTPageRoutingModule {}
