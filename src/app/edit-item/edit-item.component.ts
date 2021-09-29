import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  title : string = ""; 
  item:Item = new Item();

  projects : Item [] = [];
  
  items  : Item [] = [];
  
  constructor(private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router, private auth: AuthService) { }


  updateItem() {
    alert("this.item is" + this.item);
    // set parent to no parent 
    if(this.item.parent.toString().trim() == "")
    {
        this.item.parent="-1";
    }
    
    this.dataService.updateItem(this.item).subscribe(_ => {
       //Go back to the list page
       this.router.navigate(['list-items'])
    })
  
     
  }

  cancelUpdate() {
    alert("cancelling update ");
      
      this.router.navigate(['list-items']);
  }

  ngOnInit() : void {

      /*  this.dataService.getAllProjects().subscribe(itemList => {
          this.projects = itemList;
      })*/
       
      this.dataService.getAllProjects().subscribe(itemList => {
        this.projects = itemList;
      }) 
      console.log("ngONInit all item list " + JSON.stringify(this.projects));
      
      this.projects.filter(function (item) { return item.project === true });
      
      alert("EditItem Component projects filtered " + JSON.stringify(this.projects));


    this.activeRoute.paramMap.subscribe(params => {
          let id = params.get('id');
          alert("id  is " + id);
          if(id)
          {
        
            // this.item = this.dataService.getItemById(id);
            
           this.dataService.getItem(id).subscribe(item => {
              this.item = item;
            });


          
            alert("EditComponent: ngOnInit() -  this.item" + JSON.stringify(this.item));
          } else {
            alert("Select task to edit");
          }

        
        //alert("ngOnInit() : user is still logged in ?" + this.auth.getIsLoggedIn());
      })  ;   
          
    }   
        
           
        

  


    getAllProjects() : Item []{
        let  projects : Item []  = [];
        
       /* this.dataService.getAllProjects().subscribe(itemList => {
           projects = itemList;
        })
        */

        console.log("All projects for drop down " + JSON.stringify(projects))
        return projects;
      }

}
