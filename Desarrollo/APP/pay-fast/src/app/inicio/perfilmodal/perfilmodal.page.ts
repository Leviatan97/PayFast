import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfilmodal',
  templateUrl: './perfilmodal.page.html',
  styleUrls: ['./perfilmodal.page.scss'],
})
export class PerfilmodalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  private Salir(){
    this.modalCtrl.dismiss()
  }
}
