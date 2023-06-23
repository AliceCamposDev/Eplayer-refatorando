import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import {LoginComponent} from './views/login/login.component';
import {CampeonatosComponent} from './views/campeonatos/campeonatos.component';
import {NoticiasComponent} from './views/noticias/noticias.component';
import {RegistrarComponent} from './views/registrar/registrar.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'campeonatos', component: CampeonatosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'registrar', component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
