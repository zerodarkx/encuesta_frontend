import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'encuesta',
    component: EncuestaComponent
  },
  {
    path: 'resultado',
    component: ResultadoComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
