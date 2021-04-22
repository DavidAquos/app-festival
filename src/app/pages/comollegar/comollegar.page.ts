import {Component, OnInit} from '@angular/core';
import {Actuacion, ComoLlegar} from '../../interface/interface';
import {DataService} from '../../services/data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-comollegar',
  templateUrl: './comollegar.page.html',
  styleUrls: ['./comollegar.page.scss'],
})
export class ComollegarPage implements OnInit {

  comoLlegar: ComoLlegar = {nombre: '', ubicompleta: '', urlmapa: '', img: ''};

  constructor(private dataService: DataService, private dom: DomSanitizer) {

  }

  ngOnInit() {
    this.dataService.getComoLlegar().subscribe(res => {
      this.comoLlegar = res as ComoLlegar;
      this.transform(this.comoLlegar.urlmapa);
      console.log(this.comoLlegar.urlmapa);
    });
  }

  transform(url) {
    url = this.dom.bypassSecurityTrustResourceUrl(this.comoLlegar.urlmapa) as string;
    return url;
  }

}
