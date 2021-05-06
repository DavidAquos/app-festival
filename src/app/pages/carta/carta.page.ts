import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Restaurante} from '../../interface/interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
  img: any;

  slideOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

  }

  async ngOnInit() {

    const param = await this.activatedRoute.snapshot.paramMap.get('params').split('||');
    this.dataService.getRestaurante(param[0]).subscribe(res => {
      const restaurante = res as Restaurante;
      this.img = restaurante.imagenes_carta[param[1]];
    });
  }

}
