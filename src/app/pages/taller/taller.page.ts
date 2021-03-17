import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TallerPage implements OnInit {

  taller = {nombre: 'Taller de manualidades', img: 'assets/images/taller.jpg', horario: '17:00-18:30 (1h y 30min)',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam consectetur consequuntur dignissimos dolorum, ' +
      'eos eum excepturi explicabo ipsum iusto libero magnam magni, molestiae possimus quae quos rerum similique, sint!'};
  constructor() { }

  ngOnInit() {
  }

}
