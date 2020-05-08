import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component'
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    MenuComponent,
    TabsComponent
  ],
  exports: [
    MenuComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
