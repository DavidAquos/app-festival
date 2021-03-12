import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.page.html',
  styleUrls: ['./talleres.page.scss'],
})
export class TalleresPage implements OnInit {

  count = 0;
  textFind = '';
  listaTalleres: {taller: string, tiempo: string, img: string, id: string}[] = [];
  talleres = [
    {taller: 'Taller de manualidades', tiempo: '12:00-18:00', img: 'assets/images/taller.jpg', id: '1233'},
    {taller: 'Taller de pintura', tiempo: '12:00-19:00', img: 'assets/images/taller.jpg', id: '1234'},
    {taller: 'Taller de bricolaje', tiempo: '13:00-19:00', img: 'assets/images/taller.jpg', id: '1235'},
    {taller: 'Taller de cocina', tiempo: '14:00-19:00', img: 'assets/images/taller.jpg', id: '1236'},
    {taller: 'Taller de amasar el pan', tiempo: '11:00-19:00', img: 'assets/images/taller.jpg', id: '1237'},
    {taller: 'Taller de pasear al perro', tiempo: '10:00-19:00', img: 'assets/images/taller.jpg', id: '1238'},
  ];

  constructor() { }

  ngOnInit() {
    this.loadItems();
  }

  doInfinite(event){
    setTimeout( () => {
      this.loadItems();
      event.target.complete();
      if (this.count >= this.talleres.length) { event.target.disabled = true; }
    }, 1000);
  }

  loadItems(){
    for (let i = 0; i < 4; i++) {
      if (this.count === this.talleres.length){
        return;
      }
      this.listaTalleres.push(this.talleres[this.count]);
      this.count++;
    }
  }

  buscar(event: any) {
    this.textFind = event.detail.value;
  }

}
