import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Componente, Taller, Actuacion, TicketPrecios} from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  logged = false;
  ticketsCard: {nombre: string, precio: number, cant: number}[] = [];

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getActuaciones() {
    return this.http.get<Actuacion[]>('/assets/data/actuaciones.json');
  }

  getTalleres() {
    return this.http.get<Taller[]>('/assets/data/talleres.json');
  }

  getTicketsVenta() {
    return this.http.get<TicketPrecios[]>('/assets/data/ticketsprecio.json');
  }

  getTicketsComprados() {
    return this.http.get<TicketPrecios[]>('/assets/data/ticketscomprados.json');
  }
}
