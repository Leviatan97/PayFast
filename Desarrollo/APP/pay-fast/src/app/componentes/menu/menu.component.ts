import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { MenuService } from 'src/app/Servicios/menu.service';
import { UsuarioService } from '../../Servicios/usuario.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public componentes = null
  private plataforma: boolean

  constructor( 
    private menuservice: MenuService, 
    private usuarioService: UsuarioService, 
    private socialSharing: SocialSharing,
    private platform: Platform
    ) { 
    this.menu()
  }

  ngOnInit() {
    
  }
  private promesaMenu(){
    return new Promise((resolve,reject)=>{
      this.menuservice.menuOpciones().subscribe((result:any)=>{
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

  public logout() {
    this.usuarioService.logout()
  }

  public compartir()
  {

    if(this.platform.is("ios") == true)
    {
      this.socialSharing.share('','','','https://www.youtube.com/watch?v=Q0xpEXqSyUU')
    }
    if(this.platform.is("android")==true)
    {
      this.socialSharing.share('','','','https://www.youtube.com/watch?v=cXAEm_5CQTg')
    }
  }

  

}
