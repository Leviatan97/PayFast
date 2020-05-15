import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLogPageRoutingModule } from './form-log-routing.module';

import { FormLogPage } from './form-log.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLogPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FormLogPage]
})
export class FormLogPageModule {}
