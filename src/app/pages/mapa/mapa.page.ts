import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  img: any;

  slideOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private dataService: DataService) {
    /*dataService.getMapa().subscribe( res => {
      const img = (res as {imagen: string}).imagen;
    });*/
    if (this.img == null || this.img === '') {
      this.img = 'assets/images/errorimg.jpg';
    }
  }

  ngOnInit() {

  }


}
