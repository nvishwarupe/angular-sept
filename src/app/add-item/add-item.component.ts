import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  // old code to be removed
  idCounter = 100;

  item:Item = new Item();
  

  constructor(private dataService: DataService, private router: Router,
         private activeRoute: ActivatedRoute, private http: HttpClient
    ) { }


  ngOnInit(): void {

   /* alert("Calling from add component"+ JSON.stringify(this.dataService.getItems()));
    this.activeRoute.paramMap.subscribe(params => {
      let title = params.get('titleText');
      alert("addComponent(): title is " + title);
      if(title)
    
        this.item.title = title;
    })
    */
    
   

  }

  
// this is old code and is not used
 /* addItem(){
        alert("Add item called");
      // assign an id 
        if(this.item.project === true){
          this.item.id = "P" + (this.idCounter + 1)  ;
          alert("project is selected ");
        } else {
          alert("task is selected ");

          this.item.id = "T" + (this.idCounter + 1) ;
        }
      
       
        this.dataService.saveItem(this.item);

        //Go back to the home page
        this.router.navigate(['list-items'])

  }

 // utility method for drop down


 getAllProjects() : Item []{
  let  projects : Item []  = [];
  this.dataService.getAllProjects().subscribe(itemList => {
     projects = itemList
  })
  return projects;
}
*/
}
