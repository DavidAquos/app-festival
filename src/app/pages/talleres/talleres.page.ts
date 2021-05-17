import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Taller} from '../../interface/interface';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.page.html',
  styleUrls: ['./talleres.page.scss'],
})
export class TalleresPage implements OnInit {

  count = 0;
  initialLength = 0;
  listaTalleres: Taller[] = [];
  talleres = [];

  constructor(private dataService: DataService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.dataService.getTalleres().subscribe(res => {
      this.talleres = res as Taller[];
      this.listaTalleres.push(...this.talleres.splice(0, 4));
      this.initialLength = this.listaTalleres.length;
    });
    this.presentLoading();
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 1000
    });
    await loading.present();
  }

}
