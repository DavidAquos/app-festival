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
    this.dataService.getTicketsVenta().subscribe(tickets => {
      this.listTickets = tickets as TicketPrecios[];
    });
  }


  async Alert(nombre: string) {
    const alert = await this.alertController.create({
      header: nombre,
      message: 'Añadir al <strong>Carrito</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Añadir',
          handler: () => {
            console.log('Confirm Okay');
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
