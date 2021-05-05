import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Restaurante} from "../../interface/interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
  img: any;
  restaurante: Restaurante;

  slideOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    const param = this.activatedRoute.snapshot.paramMap.get('id');
    dataService.getRestaurante(param).subscribe( res => {
      this.restaurante = res  as Restaurante;
    });

    if (this.img == null || this.img === '') {
      this.img = 'assets/images/carta.jpg';
    }
  }

  ngOnInit() {

  }

}
