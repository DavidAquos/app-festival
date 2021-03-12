import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: any[], texto: string, columna: string): any[] {
    if (texto === '') {
      return lista;
    }

    return lista.filter(s => s.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

}
