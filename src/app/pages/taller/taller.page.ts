import { Component, OnInit } from '@angular/core';
import {Taller} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TallerPage implements OnInit {

  taller: Taller = {_id: '', descripcion: '', horario: '', fecha: '', img: '', img_mapa: '', nombre: '', ubicacion: ''};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getTaller(param).subscribe(res => {
      this.taller = res as Taller;
    });
  }

}
