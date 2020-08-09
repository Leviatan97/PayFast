import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import md5 from 'md5'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private contrasena: string;
  private correo: string;
  visible = false;

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  Validarus()
  {
    try{
      if(this.correo != undefined && this.contrasena != undefined && this.correo != "" && this.contrasena != "")
      {
        if(this.correo != null && this.contrasena != null )
        {
          const conencrip = md5(this.contrasena)
          console.log(typeof(this.contrasena))
          console.log(conencrip)
          const datosUs = {
            smo_cr : this.correo,
            smo_c :conencrip
          }
          console.log(datosUs)      
        }else
        {
          alert("Asegurese de llenar los campos requeridos.")
        }
      }
      else{
        alert("Asegurese de llenar los campos requeridos.")
      }
    }catch(error){
      console.log(error);
    }
  }

}
