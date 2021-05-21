import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FabIconComponent} from './fab-icon/fab-icon.component';


@NgModule({
  declarations: [HeaderComponent,
    MenuComponent, FabIconComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [MenuComponent, HeaderComponent, FabIconComponent]
})
export class ComponentsModule {
}
