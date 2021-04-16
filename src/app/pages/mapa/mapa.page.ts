import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Mapa} from '../../interface/interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  datosMapa = '/assets/images/mapa_numerado.jpg';
  mapaAux: Mapa = {imagen: '', puntos: [] };

  constructor(private dataService: DataService) {
    /*this.dataService.getListaMapa().subscribe(res => {
      this.mapaAux = res as Mapa;
      this.datosMapa = this.mapaAux[0];
    });*/
  }

  ngOnInit() {

  }

}
