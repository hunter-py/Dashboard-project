import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipping',
})
export class ShippingPipe implements PipeTransform {
  transform(value: boolean):any{
    if(value) 
      return 'Yes'
    if(!value)
    return 'No'
  }
}
