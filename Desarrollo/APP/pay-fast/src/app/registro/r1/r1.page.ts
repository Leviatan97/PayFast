import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.page.html',
  styleUrls: ['./r1.page.scss'],
})
export class R1Page implements OnInit {

  private nombre:String;
  private apellido:String;
  private fnacimiento:Date;
  private fecha:String;
  private tdocumento:String;

  constructor(private router : Router, private ususerv : UsuarioService) { }

  ngOnInit() {
  }
  
  private Registro(){
    const usuario={
      nombre:this.nombre,
      apellido:this.apellido,
      fnacimiento:this.fnacimiento,
      tdocumento:this.tdocumento
    }
    this.ususerv.setusuario(usuario)
   
    this.router.navigate(['registro/r2'])
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }


}
