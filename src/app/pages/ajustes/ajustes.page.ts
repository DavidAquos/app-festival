import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  darkMode = true;
  constructor() { }

  ngOnInit() {
  }

  cambio(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
    console.log('Cambiado');
  }

}
