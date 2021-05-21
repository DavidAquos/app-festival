import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  logged = false;
  ticketsCard: {nombre: string, precio: number, cant: number}[] = [];
  URL_API = 'https://angry-bhabha.82-223-151-201.plesk.page/api/eventapp';

  getActuaciones() {
    return this.http.get(this.URL_API + '/actuaciones');
  }

  getActuacion(id: string) {
    return this.http.get(this.URL_API + `/actuacion/${id}`);
  }

  getTaller(id: string) {
    return this.http.get(this.URL_API + `/taller/${id}`);
  }

  getTalleres() {
    return this.http.get(this.URL_API + '/talleres');
  }

  getFaq() {
    return this.http.get(this.URL_API + '/faq');
  }

  getComoLlegar() {
    return this.http.get(this.URL_API + '/comollegar');
  }

  getMapa() {
    return this.http.get(this.URL_API + '/mapa');
  }

  getRestaurantes() {
    return this.http.get(this.URL_API + '/restaurante');
  }

  getRestaurante(id: string) {
    return this.http.get(this.URL_API + `/restaurante/${id}`);
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getDatosContacto() {
    return this.http.get(this.URL_API + '/datoscontacto');
  }
}
