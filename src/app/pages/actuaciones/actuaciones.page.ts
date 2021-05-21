import { Component, OnInit } from '@angular/core';
import {Actuacion} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {LoadingController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.page.html',
  styleUrls: ['./actuaciones.page.scss'],
})
export class ActuacionesPage implements OnInit {

  count = 0;
  initialLength = 0;
  listActuaciones: Actuacion[] = [];
  actuaciones: Actuacion[] = [];
  auxAct: Actuacion[] = [];

  constructor(private dataService: DataService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.dataService.getActuaciones().subscribe(res => {
      this.actuaciones = res as Actuacion[];
      this.auxAct.push(...(res as Actuacion[]));
      this.listActuaciones.push(...this.actuaciones.splice(0, 4));
      this.initialLength = this.listActuaciones.length;
    });
    this.presentLoading();
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 1000
    });

    await loading.present();
  }

  order(filter: number){
    switch (filter) {
      case 1:
        this.auxAct.sort((a, b) => (a.fecha + ' ' + a.horario).localeCompare((b.fecha + ' ' + b.horario)));
        break;
      case 2:
        this.auxAct.sort((a, b) => a.ubicacion.localeCompare(b.ubicacion));
        break;
    }
    this.actuaciones.splice(0, this.actuaciones.length);
    this.actuaciones.push(...this.auxAct);
    this.listActuaciones.splice(0, this.listActuaciones.length);
    this.listActuaciones.push(...this.actuaciones.splice(0, 4));
  }
}
