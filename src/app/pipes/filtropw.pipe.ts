import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtropw'
})
export class FiltropwPipe implements PipeTransform {

  transform(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

}
