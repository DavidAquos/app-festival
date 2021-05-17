import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  restaurantes: Restaurante[] = [];
  listRestaurantes: Restaurante[] = [];
  initialLength = 0;

  constructor(private dataService: DataService, public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.dataService.getRestaurantes().subscribe(res => {
      this.restaurantes = res as Restaurante[];
      this.listRestaurantes.push(...this.restaurantes.splice(0, 4));
      this.initialLength = this.listRestaurantes.length;
    });
    this.presentLoading();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 1000
    });
    await loading.present();
  }

}
