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

  public componentes = null

  constructor( private usuarioService: UsuarioService ) { 
    this.menu()
  }

  ngOnInit() {
    
  }
  private promesaMenu(){
    return new Promise((resolve,reject)=>{
      this.usuarioService.menuOpciones().subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  public async motrarMenu(){
    let result: any = null;
    try{
       result = await this.promesaMenu()
      //  console.log(result)
    }catch(error){
      result = {
        error,
        resultado: 'error'
      } 
    }
    return result
  }

  public async menu(){
    this.componentes = await this.motrarMenu()
    this.componentes = this.componentes.result
    return this.componentes
  }

}
