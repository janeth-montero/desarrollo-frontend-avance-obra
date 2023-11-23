import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasasService } from 'src/app/services/casas.service';

import { ExploradorCasasComponent } from './explorador-casas/explorador-casas.component';
import { FiltroCasasComponent } from './filtro-casas/filtro-casas.component';
import { ListadoCasasComponent } from './listado-casas/listado-casas.component';
import { DetalleCasaComponent } from './detalle-casa/detalle-casa.component';



@NgModule({
  declarations: [
    ExploradorCasasComponent,
    FiltroCasasComponent,
    ListadoCasasComponent,
    DetalleCasaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    CasasService,
  ],
  exports: [
    ExploradorCasasComponent
  ]
})
export class InventarioModule { }
