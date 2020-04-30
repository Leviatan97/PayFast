import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLogPage } from './form-log.page';

const routes: Routes = [
  {
    path: '',
    component: FormLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormLogPageRoutingModule {}
