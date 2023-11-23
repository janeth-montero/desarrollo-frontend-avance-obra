import { Component, OnInit } from '@angular/core';

import { Casa } from 'src/app/models/casa';

import { CasasService } from 'src/app/services/casas.service';


@Component({
  selector: 'app-explorador-casas',
  templateUrl: './explorador-casas.component.html',
  styleUrls: ['./explorador-casas.component.scss']
})
export class ExploradorCasasComponent implements OnInit {

  listadoCasas: Casa[] = [];


  constructor(private data: CasasService) {

  }


  ngOnInit(): void {

    this.data.getCasasListas()
      .subscribe(casas => {
        this.listadoCasas = casas;
      });

  }


  get mensaje(): string {
    return this.listadoCasas.length > 0 ?
      `${this.listadoCasas.length} registros encontrados.` :
      'No se han encontrado registros...';
  }

}
