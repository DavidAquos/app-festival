import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuacionesPage } from './actuaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ActuacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuacionesPageRoutingModule {}
