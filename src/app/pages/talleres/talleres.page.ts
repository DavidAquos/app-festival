import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Taller} from '../../interface/interface';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.page.html',
  styleUrls: ['./talleres.page.scss'],
})
export class TalleresPage implements OnInit {

  count = 0;
  initialLength = 0;
  textFind = '';
  listaTalleres: {taller: string, tiempo: string, img: string, id: string}[] = [];
  talleres = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTalleres().subscribe(res => {
      this.talleres = res as Taller[];
      this.listaTalleres.push(...this.talleres.splice(0, 4));
      this.initialLength = this.listaTalleres.length;
    });
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
