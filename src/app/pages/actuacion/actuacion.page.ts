import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuacion',
  templateUrl: './actuacion.page.html',
  styleUrls: ['./actuacion.page.scss'],
})
export class ActuacionPage implements OnInit {

  actuacion = {titulo: 'El show de Pablo y Pedro', img: 'assets/images/actuacion.jpg',
    horario: '17:00-18:30 (1h y 30min)', actores: ['Pepe', 'Pedro'],
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Animi aperiam consectetur consequuntur dignissimos dolorum, ' +
      'eos eum excepturi explicabo ipsum iusto libero magnam magni, molestiae possimus quae quos rerum similique, sint!'};

  constructor() { }

  ngOnInit() {
  }

}
