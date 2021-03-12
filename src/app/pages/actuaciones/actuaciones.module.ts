import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuacionesPageRoutingModule } from './actuaciones-routing.module';

import { ActuacionesPage } from './actuaciones.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ActuacionesPageRoutingModule,
      ComponentsModule,
      PipesModule
  ],
  declarations: [ActuacionesPage]
})
export class ActuacionesPageModule {}
