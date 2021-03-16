import { Component, OnInit } from '@angular/core';
import {TicketPrecios} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-comprartickets',
  templateUrl: './comprartickets.page.html',
  styleUrls: ['./comprartickets.page.scss'],
})
export class ComprarticketsPage implements OnInit {

  listTickets: TicketPrecios[];
  constructor(private dataService: DataService, public alertController: AlertController) { }

  ngOnInit() {
    this.dataService.getTicketsVenta().subscribe(tickets => {
      this.listTickets = tickets as TicketPrecios[];
    });
  }


  async Alert(nombre: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: nombre,
      message: 'Añadir al <strong>Carrito</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
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
}
