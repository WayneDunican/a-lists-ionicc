import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItemById',
})
export class FilterItemByIdPipe implements PipeTransform {
  
  transform(items: any, term: string) {
    try{
      console.log(JSON.stringify(items));
      const id = Number(term);
      console.log(term);
      console.log(id);
      return items.filter(item => item.listID === term);
    }catch(err){
      console.log("Catch");
      return null;
    }
  }
}
