import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfilcmodal',
  templateUrl: './perfilcmodal.page.html',
  styleUrls: ['./perfilcmodal.page.scss'],
})
export class PerfilcmodalPage implements OnInit {

  constructor(private modalCrtl:ModalController) { }

  ngOnInit() {
  }

  private Salir(){
    this.modalCrtl.dismiss()
  }

}
