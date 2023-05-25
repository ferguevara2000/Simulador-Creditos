import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AsesorComponent } from './asesor/asesor.component';


const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'asesor', component: AsesorComponent },
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
