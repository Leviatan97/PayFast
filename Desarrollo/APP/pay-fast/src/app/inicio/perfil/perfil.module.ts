import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PerfilmodalPage } from '../perfilmodal/perfilmodal.page';
import { PerfilmodalPageModule } from '../perfilmodal/perfilmodal.module';
import { PerfiltmodalPageModule } from '../perfiltmodal/perfiltmodal.module';
import { PerfilatmodalPage } from '../perfilatmodal/perfilatmodal.page';
import { PerfilatmodalPageModule } from '../perfilatmodal/perfilatmodal.module';
import { PerfiltmodalPage } from '../perfiltmodal/perfiltmodal.page';
import { PerfilcmodalPage } from '../perfilcmodal/perfilcmodal.page';
import { PerfilcmodalPageModule } from '../perfilcmodal/perfilcmodal.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents:[
    PerfilmodalPage,
    PerfiltmodalPage,
    PerfilatmodalPage,
    PerfilcmodalPage
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ComponentesModule,
    PerfilmodalPageModule,
    PerfiltmodalPageModule,
    PerfilatmodalPageModule,
    PerfilcmodalPageModule,
    PipesModule

    
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
