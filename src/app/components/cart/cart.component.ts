import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {TicketPrecios} from '../../interface/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  tickets: [{id: number, nombre: string, precio: number}];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

  }

  menostickets() {

  }

  mastickets() {

  }
}
