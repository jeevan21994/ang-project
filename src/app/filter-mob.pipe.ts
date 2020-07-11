import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMob'
})
export class FilterMobPipe implements PipeTransform {

  transform(items: any[], mobNo: string ): any {
    if (!items || !mobNo) {
      return items;
    }
  
   else{
    return items.filter(item => item.name.toLowerCase().indexOf(mobNo.toLowerCase())!==-1 
    || item.mobno.toLowerCase().indexOf(mobNo.toLowerCase())!==-1 
    );
   }
    }

}
