import { Component, OnInit } from '@angular/core';
import {Actuacion, Restaurante} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  restaurante: Restaurante = {_id: '', nombre: '', horario: '', ubicacion: '', imagenes: []};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getRestaurante(param).subscribe(res => {
      this.restaurante = res as Restaurante;
    });
  }

}
