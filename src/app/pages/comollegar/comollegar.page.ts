import {Component, OnInit} from '@angular/core';
import {Actuacion, ComoLlegar} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-comollegar',
  templateUrl: './comollegar.page.html',
  styleUrls: ['./comollegar.page.scss'],
})
export class ComollegarPage implements OnInit {

  comoLlegar: ComoLlegar = {nombre: '', ubicompleta: '', urlmapa: '', img: ''};

  constructor(private dataService: DataService, private dom: DomSanitizer, public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.dataService.getComoLlegar().subscribe(res => {
      this.comoLlegar = res as ComoLlegar;
      this.transform(this.comoLlegar.urlmapa);
    });
    this.presentLoading();
  }

  transform(url) {
    url = this.dom.bypassSecurityTrustResourceUrl(this.comoLlegar.urlmapa) as string;
    return url;
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
  }

}
