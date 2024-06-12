import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify',
  standalone: true
})
export class StringifyPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2); // El segundo parámetro es un replacer, el tercero es el número de espacios para la indentación
  }
}
