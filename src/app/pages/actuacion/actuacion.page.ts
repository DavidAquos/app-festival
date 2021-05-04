import {Component, OnInit} from '@angular/core';
import {Actuacion} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-actuacion',
  templateUrl: './actuacion.page.html',
  styleUrls: ['./actuacion.page.scss'],
})
export class ActuacionPage implements OnInit {

  actuacion: Actuacion = {_id: '', artistas: [], descripcion: '', horario: '', nombre: '', img: '', img_mapa: '', ubicacion: ''};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id'); // A
    this.dataService.getActuacion(param).subscribe(res => {
      this.actuacion = res as Actuacion;
    });
  }
}
