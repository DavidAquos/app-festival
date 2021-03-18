import { Component, OnInit } from '@angular/core';
import {TicketGestion, TicketPrecios} from '../../interface/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-gestionarentradas',
  templateUrl: './gestionarentradas.page.html',
  styleUrls: ['./gestionarentradas.page.scss'],
})
export class GestionarentradasPage implements OnInit {

  listTickets: TicketGestion[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTicketsComprados().subscribe(tickets => {
    this.listTickets = tickets as unknown as TicketGestion[];
  });
  }

}
