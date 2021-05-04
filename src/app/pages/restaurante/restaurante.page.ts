import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../interface/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  restaurantes: Restaurante[] = [];
  listRestaurantes: Restaurante[] = [];
  initialLength = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRestaurantes().subscribe(res => {
      this.restaurantes = res as Restaurante[];
      this.listRestaurantes.push(...this.restaurantes.splice(0, 4));
      this.initialLength = this.listRestaurantes.length;
    });
  }

}
