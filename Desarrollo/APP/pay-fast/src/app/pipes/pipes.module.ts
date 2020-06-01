import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { PerfilPipe } from './perfil.pipe';



@NgModule({
  declarations: [FiltroPipe, PerfilPipe],
  exports: [ FiltroPipe, PerfilPipe ],
  imports: []
})
export class PipesModule { }
