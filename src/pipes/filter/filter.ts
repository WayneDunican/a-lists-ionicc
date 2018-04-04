import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/list/list.model';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  public listInstances$: object[] = [];
  transform(lists: any, term: string) {
    try{
      //this.listInstances$ = lists.filter(list => list.email.indexOf(term) !== -1);
      //this.listInstances$ = lists;
      return lists.filter(list => (list.sharedEmails.indexOf(term) !== -1) || (list.email.indexOf(term) !== -1));
    }catch(err){
    //  console.log("Catch");
    }
	}
}
