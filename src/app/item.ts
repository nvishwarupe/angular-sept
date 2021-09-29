import { Time } from "@angular/common";
import { templateJitUrl } from "@angular/compiler";

export class Item {
  id : string = "";
  title: string = "";
  done: boolean = false ;
  project : boolean = false;
  when : string = "12:40:pm";
  deadline : Date | undefined ;
  details : string = "";
  parent : string = "" ;
  //itemlist : Item [] = [];
}
