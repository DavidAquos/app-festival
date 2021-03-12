import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerPageRoutingModule } from './taller-routing.module';

import { TallerPage } from './taller.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TallerPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TallerPage]
})
export class TallerPageModule {}
