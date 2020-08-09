import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAluPage } from './home-alu.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAluPageRoutingModule {}
