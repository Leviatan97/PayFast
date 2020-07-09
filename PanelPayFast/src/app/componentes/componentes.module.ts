import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopInfoComponent } from './pop-info/pop-info.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [PopInfoComponent,HeaderComponent],
  exports:[
    PopInfoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class ComponentesModule { }
