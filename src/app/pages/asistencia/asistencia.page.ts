import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Question} from '../../interface/interface';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  questions: Question[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFaq().subscribe(res => {
      this.questions = res as Question[];
    });
  }

}
