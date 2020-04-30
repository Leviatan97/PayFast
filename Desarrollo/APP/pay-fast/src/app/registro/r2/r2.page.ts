import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.page.html',
  styleUrls: ['./r2.page.scss'],
})
export class R2Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  private Registro(){
    this.router.navigate(['/registro/r3'])
  }
}
