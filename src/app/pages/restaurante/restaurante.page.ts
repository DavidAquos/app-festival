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

  restaurante: Restaurante = {_id: '', nombre: '', imagen: '', imagenes_carta: [], horario: '', img_mapa: '', localizacion: ''};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getRestaurante(param).subscribe(res => {
      this.restaurante = res as Restaurante;
    });
  }

  url(img: string): string {
    let s = '/carta/';
    for (let i = 0; i < this.restaurante.imagenes_carta.length; i++) {
      if (this.restaurante.imagenes_carta[i] === img){
        s += this.restaurante._id + '||' + i;
      }
    }
    return s;
  }

}
