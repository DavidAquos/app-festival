import { Component, OnInit } from '@angular/core';
import {TicketPrecios} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {AlertController, PopoverController} from '@ionic/angular';
import {CartComponent} from '../../components/cart/cart.component';

@Component({
  selector: 'app-comprartickets',
  templateUrl: './comprartickets.page.html',
  styleUrls: ['./comprartickets.page.scss'],
})
export class ComprarticketsPage implements OnInit {

  listTickets: TicketPrecios[];
  constructor(private dataService: DataService, public alertController: AlertController, public popoverController: PopoverController) { }

  ngOnInit() {
    /*this.dataService.getTicketsVenta().subscribe(tickets => {
      this.listTickets = tickets as TicketPrecios[];
    });*/
  }


  async Alert(nombre: string, precio: number) {
    const alert = await this.alertController.create({
      header: 'Entrada ' + nombre,
      message: 'Añadir al <strong>Carrito</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
          }
        }, {
          text: 'Añadir',
          handler: () => {
            let r  = false;
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.dataService.ticketsCard.length; i++){
              if (this.dataService.ticketsCard[i].nombre === nombre){
                this.dataService.ticketsCard[i].cant ++;
                r = true;
              }
            }
            if (!r){
              this.dataService.ticketsCard.push({nombre, precio, cant: 1});
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async popover(e: any) {
    const popover = await this.popoverController.create({
      component: CartComponent,
      translucent: true,
      event: e
    });
    return await popover.present();
  }
}
