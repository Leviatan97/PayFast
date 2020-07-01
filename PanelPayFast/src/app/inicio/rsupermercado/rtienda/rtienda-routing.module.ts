import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RtiendaPage } from './rtienda.page';


const routes: Routes = [
  {
    path: '',
    component: RtiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtiendaPageRoutingModule {}
