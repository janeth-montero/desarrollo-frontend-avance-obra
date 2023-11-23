import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Casa } from '../models/casa';

const API_PATH = 'https://655eac02879575426b43c5d3.mockapi.io/api/';

@Injectable({
  providedIn: 'root'
})
export class CasasService {


  constructor(private http: HttpClient) { }


  getCasasListas(): Observable<Casa[]> {
    const path = API_PATH + 'casas';

    return this.http.get<Casa[]>(path);
  }

}
