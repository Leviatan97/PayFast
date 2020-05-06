import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular/directives/navigation/nav-params';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.page.html',
  styleUrls: ['./r2.page.scss'],
})
export class R2Page implements OnInit {
  
  private usuario :any;

  private ndocumento:String;
  private email:String;
  private contrasena:String;
  

  constructor(private router : Router, private ususer : UsuarioService) {
    this.usuario = ususer.getusuario()
    
  }

  ngOnInit() {
  }
  private Registro(){
    const usu = {
      nombre : this.usuario.nombre,
      apellido : this.usuario.apellido,
      fnacimiento : this.usuario.fnacimiento,
      tdocumento : this.usuario.tdocumento,
      ndocumento : this.ndocumento,
      email : this.email,
      contrasena : this.contrasena
    }
    this.ususer.setusuario(usu)
    this.router.navigate(['/registro/r3'])
    
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }
}
