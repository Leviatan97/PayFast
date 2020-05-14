import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-perfilmodal',
  templateUrl: './perfilmodal.page.html',
  styleUrls: ['./perfilmodal.page.scss'],
})
export class PerfilmodalPage implements OnInit {

  private datos: any;
  constructor(private modalCtrl: ModalController, private usuarioServie: UsuarioService) {
    this.datos = this.usuarioServie.getusuarioEdit();
  }

  ngOnInit() {
  }
  private Salir() {
    this.modalCtrl.dismiss();
  }
}
