import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalleresPageRoutingModule } from './talleres-routing.module';

import { TalleresPage } from './talleres.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalleresPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [TalleresPage]
})
export class TalleresPageModule {}
