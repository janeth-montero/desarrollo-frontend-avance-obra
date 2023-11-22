import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent
  ]
})
export class DashboardModule { }
