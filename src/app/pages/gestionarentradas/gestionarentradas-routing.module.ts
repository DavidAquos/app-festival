import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarentradasPage } from './gestionarentradas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarentradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarentradasPageRoutingModule {}
