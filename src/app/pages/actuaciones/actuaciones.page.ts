import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.page.html',
  styleUrls: ['./actuaciones.page.scss'],
})
export class ActuacionesPage implements OnInit {

  count = 0;
  listActuaciones: {actuacion: string, tiempo: string, img: string, id: string}[] = [];
  actuaciones = [
    {actuacion: 'Actuacion1', tiempo: '17:00-18:00', img: 'assets/images/actuacion.jpg', id: '1233'},
    {actuacion: 'Actuacion2', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1234'},
    {actuacion: 'Actuacion3', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1235'},
    {actuacion: 'Actuacion4', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1236'},
    {actuacion: 'Actuacion5', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1237'},
    {actuacion: 'Actuacion6', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1238'},
    ];

  constructor() { }

  ngOnInit() {
    this.loadItems();
  }

  doInfinite(event){
    setTimeout( () => {
      this.loadItems();
      event.target.complete();
      if (this.count >= this.actuaciones.length) { event.target.disabled = true; }
    }, 1000);
  }

  loadItems(){
    for (let i = 0; i < 4; i++) {
      if (this.count === this.actuaciones.length){
        return;
      }
      this.listActuaciones.push(this.actuaciones[this.count]);
      this.count++;
    }
  }
}
