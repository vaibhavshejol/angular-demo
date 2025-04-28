import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(str: string) {
    return str.split('').reverse().join('');
  }

}

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform {

  transform(num1: number, num2: number) {
    return num1+num2;
  }

}