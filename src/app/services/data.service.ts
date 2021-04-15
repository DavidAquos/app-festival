import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Componente, TicketPrecios} from '../interface/interface';

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

  getActuaciones() {
    return this.http.get(this.URL_API + '/actuaciones');
  }

  // tslint:disable-next-line:variable-name
  getActuacion(_id: string) {
    return this.http.get(this.URL_API + `/actuacion/${_id}`);
  }

  // tslint:disable-next-line:variable-name
  getTaller(_id: string) {
    return this.http.get(this.URL_API + `/taller/${_id}`);
  }

  getTalleres() {
    return this.http.get(this.URL_API + '/talleres');
  }

  getTicketsVenta() {
    return this.http.get<TicketPrecios[]>('/assets/data/ticketsprecio.json');
  }

  getTicketsComprados() {
    return this.http.get<TicketPrecios[]>('/assets/data/ticketscomprados.json');
  }

  getSeries() {
    return this.http.get(this.URL_API);
  }

  getListaMapa() {
    return this.http.get(this.URL_API + '/mapa');
  }
}
