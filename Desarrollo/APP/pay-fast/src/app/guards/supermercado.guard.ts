import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SupermercadoService } from '../Servicios/supermercado.service';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoGuard implements CanLoad {
  constructor(private superService: SupermercadoService) {
    
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.superService.verificarCoor();
  }
}
