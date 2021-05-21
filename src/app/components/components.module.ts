import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FabIconComponent} from './fab-icon/fab-icon.component';
import {PopoverfilterComponent} from './popoverfilter/popoverfilter.component';



@NgModule({
  declarations: [HeaderComponent, FabIconComponent, PopoverfilterComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent, FabIconComponent, PopoverfilterComponent]
})
export class ComponentsModule {
}
