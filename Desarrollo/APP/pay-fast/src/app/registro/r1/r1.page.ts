import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.page.html',
  styleUrls: ['./r1.page.scss'],
})
export class R1Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  private Registro(){
    this.router.navigate(['registro/r2'])
  }

}
