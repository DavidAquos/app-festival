import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltropwPipe } from './filtropw.pipe';



@NgModule({
  declarations: [FiltroPipe, FiltropwPipe],
  imports: [
    CommonModule
  ],
  exports: [FiltroPipe]
})
export class PipesModule { }
