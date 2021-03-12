import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.page.html',
  styleUrls: ['./actuaciones.page.scss'],
})
export class ActuacionesPage implements OnInit {

  count = 0;
  textFind = '';
  listActuaciones: {actuacion: string, tiempo: string, img: string, id: string}[] = [];
  actuaciones = [
    {actuacion: 'El show de Pedro', tiempo: '17:00-18:00', img: 'assets/images/actuacion.jpg', id: '1233'},
    {actuacion: 'El Santi Abascal', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1234'},
    {actuacion: 'El show de truman', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1235'},
    {actuacion: 'Paco el lechero', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1236'},
    {actuacion: 'La roca va al baño', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1237'},
    {actuacion: 'Torrente y sus mozas', tiempo: '18:00-19:00', img: 'assets/images/actuacion.jpg', id: '1238'},
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

  buscar(event: any) {
    this.textFind = event.detail.value;
  }
}
