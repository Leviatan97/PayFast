import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialPage } from './tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialPage
  },
  {
    path: 'home-tut',
    loadChildren: () => import('./home-tut/home-tut.module').then( m => m.HomeTutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialPageRoutingModule {}
