import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComollegarPageRoutingModule } from './comollegar-routing.module';

import { ComollegarPage } from './comollegar.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComollegarPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ComollegarPage]
})
export class ComollegarPageModule {}
