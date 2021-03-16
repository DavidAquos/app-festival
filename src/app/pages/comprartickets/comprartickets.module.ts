import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarticketsPageRoutingModule } from './comprartickets-routing.module';

import { ComprarticketsPage } from './comprartickets.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarticketsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComprarticketsPage]
})
export class ComprarticketsPageModule {}
