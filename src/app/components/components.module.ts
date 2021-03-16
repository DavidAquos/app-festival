import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FabIconComponent} from './fab-icon/fab-icon.component';
import {CartComponent} from './cart/cart.component';


@NgModule({
  declarations: [HeaderComponent,
    MenuComponent, FabIconComponent, CartComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [MenuComponent, HeaderComponent, FabIconComponent, CartComponent]
})
export class ComponentsModule {
}
