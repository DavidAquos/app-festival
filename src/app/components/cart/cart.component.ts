import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {TicketPrecios} from '../../interface/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  tickets = [{nombre: 'Reducida', precio: 6.98}, {nombre: 'Reducida', precio: 6.98}
  , {nombre: 'Reducida', precio: 6.98}, {nombre: 'Reducida', precio: 6.98}];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  menostickets() {

  }

  mastickets() {

  }
}
