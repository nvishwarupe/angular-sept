import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: Item [] ,  doneFlag: boolean): Item [] {
    
      if(doneFlag){
      let taskList : Item [] = value.filter((item) => item.done == true );
      return taskList;
     } else {
       return value;
     }
  }
}
