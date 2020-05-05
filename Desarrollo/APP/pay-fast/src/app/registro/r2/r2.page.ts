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

  constructor(private router : Router, private ususer : UsuarioService) {
    console.log(ususer.getusuario())
  }

  ngOnInit() {
  }
  private Registro(){
    
    this.router.navigate(['/registro/r3'])
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }
}
