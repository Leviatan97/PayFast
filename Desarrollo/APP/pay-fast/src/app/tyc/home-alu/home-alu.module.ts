import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAluPageRoutingModule } from './home-alu-routing.module';

import { HomeAluPage } from './home-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAluPageRoutingModule
  ],
  declarations: [HomeAluPage]
})
export class HomeAluPageModule {}
