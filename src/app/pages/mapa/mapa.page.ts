import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Mapa} from "../../interface/interface";

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
    dataService.getMapa().subscribe( res => {
      this.img = res as Mapa;
    });
    if (this.img == null || this.img === '') {
      this.img = 'assets/images/errorimg.jpg';
    }
  }

  ngOnInit() {

  }


}
