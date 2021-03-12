import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuacionPageRoutingModule } from './actuacion-routing.module';

import { ActuacionPage } from './actuacion.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ActuacionPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ActuacionPage]
})
export class ActuacionPageModule {}
