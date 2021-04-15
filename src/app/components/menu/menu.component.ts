import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interface/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  img(icon: string) {
    const i = icon.split('.');
    return (i[0] + 'v.' + i[1]);
  }
}
