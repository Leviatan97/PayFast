import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiltmodalPageRoutingModule } from './perfiltmodal-routing.module';

import { PerfiltmodalPage } from './perfiltmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiltmodalPageRoutingModule
  ],
  declarations: [PerfiltmodalPage]
})
export class PerfiltmodalPageModule {}
