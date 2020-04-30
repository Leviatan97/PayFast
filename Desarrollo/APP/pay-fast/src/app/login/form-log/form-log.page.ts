import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.page.html',
  styleUrls: ['./form-log.page.scss'],
})
export class FormLogPage implements OnInit {

  constructor(
    private router: Router
  ) {

   }

  private registrarse(){
    this.router.navigate(['registro/r1'])
  }

  ngOnInit() {
  }

}
