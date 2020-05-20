import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  private tyc(){
    this.router.navigate(['tyc/home-tyc'])
  }

}
