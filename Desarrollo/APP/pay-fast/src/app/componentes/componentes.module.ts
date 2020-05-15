import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component'
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { Router, RouterModule } from '@angular/router';
import { BotonesLRComponent } from './botones-lr/botones-lr.component';




@NgModule({
  declarations: [
    MenuComponent,
    TabsComponent,
    BotonesLRComponent
  ],
  exports: [
    MenuComponent,
    TabsComponent,
    BotonesLRComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentesModule { }
