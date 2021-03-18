import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarentradasPageRoutingModule } from './gestionarentradas-routing.module';

import { GestionarentradasPage } from './gestionarentradas.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GestionarentradasPageRoutingModule,
        ComponentsModule
    ],
  declarations: [GestionarentradasPage]
})
export class GestionarentradasPageModule {}
