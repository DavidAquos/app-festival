import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// @ts-ignore
// @ts-ignore
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
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actuacion/:id',
    loadChildren: () => import('./pages/actuacion/actuacion.module').then( m => m.ActuacionPageModule)
  },
  {
    path: 'taller/:id',
    loadChildren: () => import('./pages/taller/taller.module').then( m => m.TallerPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'comprartickets',
    loadChildren: () => import('./pages/comprartickets/comprartickets.module').then( m => m.ComprarticketsPageModule)
  },
  {
    path: 'gestionarentradas',
    loadChildren: () => import('./pages/gestionarentradas/gestionarentradas.module').then( m => m.GestionarentradasPageModule)
  },
  {
    path: 'restaurante/:id',
    loadChildren: () => import('./pages/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'carta/:params',
    loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
