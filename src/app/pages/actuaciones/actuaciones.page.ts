import { Component, OnInit } from '@angular/core';
import {Actuacion} from '../../interface/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.page.html',
  styleUrls: ['./actuaciones.page.scss'],
})
export class ActuacionesPage implements OnInit {

  count = 0;
  initialLength = 0;
  textFind = '';
  listActuaciones: Actuacion[] = [];
  actuaciones: Actuacion[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getActuaciones().subscribe(res => {
      this.actuaciones = res as Actuacion[];
      this.listActuaciones.push(...this.actuaciones.splice(0, 4));
      this.initialLength = this.listActuaciones.length;
    });
  }

  doInfinite(event: any) {
    if (this.actuaciones.length > this.initialLength){
      event.target.complete();
      event.disabled = true;
      return;
    }
    setTimeout(() => {
      this.listActuaciones.push(...this.actuaciones.splice(0, 4));
      event.target.complete();
    }, 500);
  }

  loadItems(event){
    /*for (let i = 0; i < 4; i++) {
      if (this.count === this.actuaciones.length){
        return;
      }
      this.listActuaciones.push(this.actuaciones[this.count]);
      this.count++;
    }*/
    this.listActuaciones.push(...this.actuaciones.splice(0, 4));
    event.target.complete();
  }

  buscar(event: any) {
    this.textFind = event.detail.value;
  }
}
