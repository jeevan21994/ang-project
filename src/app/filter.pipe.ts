import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(items: any[], searchText: string ): any {
  if (!items || !searchText) {
    return items;
  }

 else{
  return items.filter(item => item.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1 
  || item.mobno.toLowerCase().indexOf(searchText.toLowerCase())!==-1 
  );
 }
  }
 }
