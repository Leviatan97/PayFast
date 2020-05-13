import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfiltmodal',
  templateUrl: './perfiltmodal.page.html',
  styleUrls: ['./perfiltmodal.page.scss'],
})
export class PerfiltmodalPage implements OnInit {

  constructor(private modalCrtl:ModalController) { }

  ngOnInit() {
  }
  private Salir(){
    this.modalCrtl.dismiss()
  }
}
