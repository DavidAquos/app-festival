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
        this.precioTotal = (Math.round((this.precioTotal + (this.dataService.ticketsCard[i].precio *
          this.dataService.ticketsCard[i].cant)) * 1000 ) / 1000);
      }
    }else {
      this.dissableBtnPagar();
    }
  }

  menostickets(id: number) {
    if (( this.tickets[id].cant - 1) >= 0) {
      this.tickets[id].cant--;
      this.dataService.ticketsCard[id].cant--;
      this.precioTotal = (Math.round((this.precioTotal - this.tickets[id].precio) * 1000) / 1000);
      if (this.tickets[id].cant === 0) {
        this.tickets.splice(id, 1);
        this.dataService.ticketsCard.splice(id, 1);
        this.refreshId();
      }
    }
    if (this.tickets.length === 0){
      this.dissableBtnPagar();
    }
  }

  mastickets(id: number) {
    this.tickets[id].cant++;
    this.precioTotal = (Math.round((this.precioTotal + this.tickets[id].precio) * 1000 ) / 1000);
    this.dataService.ticketsCard[id].cant++;
  }

  refreshId(){
    for (let i = 0; i < this.tickets.length; i++) {
      this.tickets[i].id = i;
    }
  }

  dissableBtnPagar() {
    const btnPagar =  document.getElementById('btnPagar') as HTMLButtonElement;
    btnPagar.disabled = true;
  }
}
