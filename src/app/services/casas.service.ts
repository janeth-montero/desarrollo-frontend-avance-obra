import { Injectable } from '@angular/core';

import { Casa, listaCasasDummy } from '../models/casa';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  constructor() { }


  getCasasListas(): Casa[] {
    return listaCasasDummy;
  }

}
