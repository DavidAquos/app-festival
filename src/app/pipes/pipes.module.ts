import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltropwPipe } from './filtropw.pipe';



@NgModule({
  declarations: [FiltropwPipe],
  imports: [
    CommonModule
  ],
  exports: []
})
export class PipesModule { }
