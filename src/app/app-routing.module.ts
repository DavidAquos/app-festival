import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'actuaciones',
    loadChildren: () => import('./pages/actuaciones/actuaciones.module').then( m => m.ActuacionesPageModule)
  },
  {
    path: 'talleres',
    loadChildren: () => import('./pages/talleres/talleres.module').then( m => m.TalleresPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'comollegar',
    loadChildren: () => import('./pages/comollegar/comollegar.module').then( m => m.ComollegarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
