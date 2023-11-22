import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { ExploradorCasasComponent } from './pages/inventario/explorador-casas/explorador-casas.component';
import { ExploradorProgresoComponent } from './pages/progreso-construccion/explorador-progreso/explorador-progreso.component';
import { PaginaNoEncontradaComponent } from './pages/autenticacion/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent },
  { path: 'inventario', component: ExploradorCasasComponent },
  { path: 'avance-obra', component: ExploradorProgresoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
