import { Component, OnInit } from '@angular/core';

import { Casa } from 'src/app/models/casa';

import { CasasService } from 'src/app/services/casas.service';


@Component({
  selector: 'app-explorador-casas',
  templateUrl: './explorador-casas.component.html',
  styleUrls: ['./explorador-casas.component.scss']
})
export class ExploradorCasasComponent implements OnInit {

  cargandoCasas = false;

  listadoCasas: Casa[] = [];


  constructor(private data: CasasService) {

  }


  ngOnInit() {
    this.getCasasListas();
  }


  get mensaje(): string {
    if (this.cargandoCasas) {
      return 'Cargando...';
    } else {

      return this.listadoCasas.length > 0 ?
        `${this.listadoCasas.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }


  private getCasasListas() {
    this.cargandoCasas = true;

    this.data.getCasasListas()
      .subscribe(x => {
        this.cargandoCasas = false;
        this.listadoCasas = x;
      });
  }

}
