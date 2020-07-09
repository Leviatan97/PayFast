import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from './../pop-info/pop-info.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private usuario = "Usuario"

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async mostrarPop(evento) {
    const popover = await this.popoverCtrl.create({
      component: PopInfoComponent,
      event: evento,
      mode:'ios'
    });

    await popover.present();

  }

}
