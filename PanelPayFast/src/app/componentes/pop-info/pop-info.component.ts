import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent implements OnInit {

  constructor(private router: Router, private popoverCrlt: PopoverController) { }

  ngOnInit() {}

  tien()
  {
    this.router.navigate(['/inicio/inicio-t'])
    this.popoverCrlt.dismiss()
  }

  sup()
  {
    this.router.navigate(['/inicio/inicio-s'])
    this.popoverCrlt.dismiss()
  }

}
