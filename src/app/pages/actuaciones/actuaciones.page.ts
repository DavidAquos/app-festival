import { Component, OnInit } from '@angular/core';
import {Actuacion} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {LoadingController, ModalController} from "@ionic/angular";

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

  constructor(private dataService: DataService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.dataService.getActuaciones().subscribe(res => {
      this.actuaciones = res as Actuacion[];
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
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
}
