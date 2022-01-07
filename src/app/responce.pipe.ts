import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responce'
})
export class ResponcePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value + " You're welcome";
  }

}
