import { Component } from '@angular/core';

import { Casa, listaCasasDummy } from 'src/app/models/casa';

@Component({
  selector: 'app-explorador-casas',
  templateUrl: './explorador-casas.component.html',
  styleUrls: ['./explorador-casas.component.scss']
})
export class ExploradorCasasComponent {

  listadoCasas: Casa[] = listaCasasDummy;


  get mensaje(): string {
    return this.listadoCasas.length > 0 ?
      `${this.listadoCasas.length} registros encontrados.` :
      'No se han encontrado registros...';
  }

}
