import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.page.html',
  styleUrls: ['./r3.page.scss'],
})
export class R3Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  private Inicio(){
    this.router.navigate(['inicio/i1'])
  }
  private Login(){
    this.router.navigate(['login/form-log'])
  }

}
