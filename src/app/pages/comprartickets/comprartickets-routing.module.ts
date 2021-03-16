import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarticketsPage } from './comprartickets.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarticketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarticketsPageRoutingModule {}
