import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  tickets: {id: number, nombre: string, precio: number, cant: number}[] = [];
  precioTotal =  0.00;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    if (this.dataService.ticketsCard.length > 0) {
      for (let i = 0; i < this.dataService.ticketsCard.length; i++) {
        this.tickets.push({
          id: i, nombre: this.dataService.ticketsCard[i].nombre,
          precio: this.dataService.ticketsCard[i].precio, cant: this.dataService.ticketsCard[i].cant
        });
        this.precioTotal = this.precioTotal +
          (Number((this.dataService.ticketsCard[i].precio * this.dataService.ticketsCard[i].cant).toFixed(2)));
        console.log(Math.round(this.precioTotal * 10 ) / 10);
      }
    }
  }

  menostickets() {

  }

  mastickets() {

  }
}
