import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  darkMode = true;
  constructor() {
    const prefersDark = window.matchMedia('(preferes-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
  }

  cambioModo(event: any){
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  cambioNotis(event: any) {

  }
}
