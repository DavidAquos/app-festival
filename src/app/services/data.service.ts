import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Componente, Taller, Actuacion} from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  logged = false;

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getActuaciones() {
    return this.http.get<Actuacion[]>('/assets/data/actuaciones.json');
  }

  getTalleres() {
    return this.http.get<Taller[]>('/assets/data/talleres.json');
  }
}
