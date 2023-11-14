import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorCasasComponent } from './explorador-casas/explorador-casas.component';
import { FiltroCasasComponent } from './filtro-casas/filtro-casas.component';
import { ListadoCasasComponent } from './listado-casas/listado-casas.component';
import { DetalleCasasComponent } from './detalle-casas/detalle-casas.component';



@NgModule({
  declarations: [
    ExploradorCasasComponent,
    FiltroCasasComponent,
    ListadoCasasComponent,
    DetalleCasasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExploradorCasasComponent
  ]
})
export class InventarioModule { }
