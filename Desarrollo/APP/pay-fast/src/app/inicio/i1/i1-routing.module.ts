import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I1Page } from './i1.page';

const routes: Routes = [
  {
    path: '',
    component: I1Page
  },  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I1PageRoutingModule {}
