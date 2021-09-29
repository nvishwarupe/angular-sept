import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: Item [] , title: string, searchFlag: boolean): Item [] {
    
    if(searchFlag)
    {
      let taskList : Item [] = value.filter((item) => item.title.includes(title) );
      return taskList;
    } else {
      // no filter applied
      return value;
    }
  }

}
