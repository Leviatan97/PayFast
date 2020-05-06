import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.page.html',
  styleUrls: ['./r3.page.scss'],
})
export class R3Page implements OnInit {

  private tnombre:String;
  private tapellido:String;
  private tnumero:String;
  private tfvencimiento:Date;
  private tcvv:String;
  
  private usu1:any

  constructor(private router : Router, private usuario:UsuarioService) {
      this.usu1 = this.usuario.getusuario()
   }
   
  ngOnInit() {
  }
  private Inicio(){

    const tarjeta ={
      tnombre:this.tnombre,
      tapellido:this.tapellido,
      tnumero:this.tnumero,
      tfvencimiento:this.tfvencimiento,
      tcvv:this.tcvv
    }
    console.log(tarjeta)

    //this.router.navigate(['inicio/i1'])
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }
  

}
