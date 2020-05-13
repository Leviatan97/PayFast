import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  private inicio(){
    this.router.navigate(['inicio/i1'])
  }

  private historial(){
    this.router.navigate(['/inicio/historial'])
  }

  private perfil(){
    this.router.navigate(['/inicio/perfil'])
  }

  private tutorial(){
    this.router.navigate(['/tutorial/home-tut'])
  }

}
