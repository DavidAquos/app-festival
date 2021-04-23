import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Actuacion, Componente, Question, Taller, TicketPrecios} from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  logged = false;
  ticketsCard: {nombre: string, precio: number, cant: number}[] = [];
  URL_API = 'http://localhost:3000/api/eventapp';

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  /*getActuaciones() {
    return this.http.get(this.URL_API + '/actuaciones');
  }*/

  getActuaciones() {
    return this.http.get<Actuacion[]>('/assets/data/actuaciones.json');
  }

  /*getActuacion(id: string) {
    return this.http.get(this.URL_API + `/actuacion/${id}`);
  }*/


  getActuacion(id: string) {
    return this.http.get<Actuacion>('/assets/data/actuacion.json');
  }

  /*getTaller(id: string) {
    return this.http.get(this.URL_API + `/taller/${id}`);
  }*/

  getTaller(id: string) {
    return this.http.get<Taller>('/assets/data/taller.json');
  }

  /*getTalleres() {
    return this.http.get(this.URL_API + '/talleres');
  }*/

  getTalleres() {
    return this.http.get<Taller[]>('/assets/data/talleres.json');
  }

  /*getFaq() {
    return this.http.get(this.URL_API + '/faq');
  }*/

  getFaq() {
    return this.http.get<Question[]>('/assets/data/faq.json');
  }

  getComoLlegar() {
    return this.http.get(this.URL_API + '/comollegar');
  }
}
