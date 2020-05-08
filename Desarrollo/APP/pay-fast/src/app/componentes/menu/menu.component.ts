import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service'
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private componentes: Observable<Componente[]>

  constructor( private usuarioService: UsuarioService ) { 
    this.consulta()
  }

  ngOnInit() {
      
  }

  private consulta(){
    this.componentes = this.usuarioService.menuOpciones();
    console.log(this.componentes)
  }

}
