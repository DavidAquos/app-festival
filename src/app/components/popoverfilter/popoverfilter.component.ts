import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popoverfilter',
  templateUrl: './popoverfilter.component.html',
  styleUrls: ['./popoverfilter.component.scss'],
})
export class PopoverfilterComponent implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {}

  closePopover(n: number) {
    this.popoverController.dismiss({
      value: n
    });
  }
}
