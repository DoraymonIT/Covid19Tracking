import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

 transform(value: any, args?: any): any {
	 
    if(!args)
     return value;
    return value.filter(
      item => item.country.toLowerCase().indexOf(args.toLowerCase()) > -1
   );
  }
}
