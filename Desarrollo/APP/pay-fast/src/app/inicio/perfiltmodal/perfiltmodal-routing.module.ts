import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiltmodalPage } from './perfiltmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiltmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiltmodalPageRoutingModule {}
