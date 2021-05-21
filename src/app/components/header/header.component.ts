import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverfilterComponent} from '../popoverfilter/popoverfilter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() filter: EventEmitter<number> = new EventEmitter<number>();
  @Input() list: boolean;

  constructor(private popoverController: PopoverController) {
    if (this.list == null) { this.list = false; }
  }

  ngOnInit() { }

  async popoverOpen(ev) {
    const popover = await this.popoverController.create({
      mode: 'ios',
      component: PopoverfilterComponent,
      event: ev,
      translucent: true,
      showBackdrop: false
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    if(data != null) {
      this.filter.emit(data.value);
    }
  }
}
