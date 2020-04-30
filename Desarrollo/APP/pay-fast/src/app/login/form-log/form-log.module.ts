import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLogPageRoutingModule } from './form-log-routing.module';

import { FormLogPage } from './form-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLogPageRoutingModule
  ],
  declarations: [FormLogPage]
})
export class FormLogPageModule {}
