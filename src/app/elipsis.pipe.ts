import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    if(limit && value.length > limit) {
      return value.substring(0, limit).concat('...');
    }
    return value;
  }

}