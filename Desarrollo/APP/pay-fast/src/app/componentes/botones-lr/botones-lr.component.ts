import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-lr',
  templateUrl: './botones-lr.component.html',
  styleUrls: ['./botones-lr.component.scss'],
})
export class BotonesLRComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  private login(){
    this.router.navigate(['login/form-log'])
  }
}
