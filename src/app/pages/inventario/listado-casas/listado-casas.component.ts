import { Component, Input } from '@angular/core';

import { Casa } from 'src/app/models/casa';

@Component({
  selector: 'app-listado-casas',
  templateUrl: './listado-casas.component.html',
  styleUrls: ['./listado-casas.component.scss']
})
export class ListadoCasasComponent {

  @Input() listadoCasas: Casa[] = [];

  @Input() cargandoCasas = false;

  rutaImagen = '../../../../assets/img/real-estate/';

}
