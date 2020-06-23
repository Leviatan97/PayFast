import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { LoginRComponent } from './login/login-r/login-r.component';
import { RSupermercadosComponent } from './home/r-supermercados/r-supermercados.component';
import { RTiendaComponent } from './home/r-supermercados/r-tienda/r-tienda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/recuperacion', component: LoginRComponent },
  { path: 'home/rsupermercado', component: RSupermercadosComponent },
  { path: 'home/rsupermercado/rtienda', component: RTiendaComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  

 }
