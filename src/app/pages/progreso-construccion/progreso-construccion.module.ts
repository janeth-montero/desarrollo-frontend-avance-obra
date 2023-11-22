import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorProgresoComponent } from './explorador-progreso/explorador-progreso.component';



@NgModule({
  declarations: [
    ExploradorProgresoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExploradorProgresoComponent
  ]
})
export class ProgresoConstruccionModule { }
