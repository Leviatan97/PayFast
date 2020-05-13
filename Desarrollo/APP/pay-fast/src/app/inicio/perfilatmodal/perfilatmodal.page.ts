import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfilatmodal',
  templateUrl: './perfilatmodal.page.html',
  styleUrls: ['./perfilatmodal.page.scss'],
})
export class PerfilatmodalPage implements OnInit {

  constructor(private modalCrtl:ModalController) { }

  ngOnInit() {
  }

  private Salir(){
    this.modalCrtl.dismiss()
  }

}
