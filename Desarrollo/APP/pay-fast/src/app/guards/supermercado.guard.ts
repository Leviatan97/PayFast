import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SupermercadoService } from '../Servicios/supermercado.service';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoGuard implements CanActivate {

  constructor(private superService: SupermercadoService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.superService.verificarCoor();
  }
  
}
