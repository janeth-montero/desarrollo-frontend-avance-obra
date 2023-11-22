import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginaNoEncontradaComponent
  ]
})
export class AutenticacionModule { }
