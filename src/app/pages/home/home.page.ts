import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Componente} from '../../interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Componente[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getMenuOptions().subscribe(res => {
      this.categories = res as Componente[];
    });
  }
}
