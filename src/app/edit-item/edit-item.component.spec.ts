import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { from, of, Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Item } from '../item';

import { RouterTestingModule } from '@angular/router/testing';

import { EditItemComponent } from './edit-item.component';

import { HttpClient, HttpClientModule} from '@angular/common/http';

import { ItemListComponent } from '../item-list/item-list.component';

import { Location} from '@angular/common';
import { AuthService } from '../auth.service';



describe('EditItemComponent', () => {
  let component: EditItemComponent;
  let fixture: ComponentFixture<EditItemComponent>;  
  let service : DataService;
  let authService: AuthService;

  let router : Router;
  let location : Location;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule,  RouterTestingModule.withRoutes(
        [{ path: "list-items" , component: ItemListComponent}]
      )],
        
      declarations: [ EditItemComponent ],
      providers : [         
        DataService, AuthService
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location); 
    authService = TestBed.inject(AuthService);

   //router.initialNavigation();

  });

  
it('should create', () => {
  expect(component).toBeTruthy();
});


/*it('navigate to edited item save redirects you to item-list', fakeAsync(() => { 
  router.navigate(['list-items']); 
  tick(); 
  expect(location.pathname).toBe('list-items'); 
}));
*/

it('should route to list page', fakeAsync(() => {
  spyOn(authService, 'canActivate').and.returnValue(true);
  
  let itemArray =  [     
    {
      "id": "T20000",
      "title": "my test task",
      "done": false,
      "project": true,
      "when": "8:00",
      "deadline": new Date("2021-09-27T16:46:50.990Z"),
      "details": "test details",
      "parent": "-1"
    } ];

     
    let itemArrayObservable = from (itemArray);
   // dataServiceSpy.getItems.and.returnValue(itemArrayObservable);
    spyOn(service,'getItems').and.returnValue(of(itemArray));


  router.navigate(["list-items"]);
  tick();
  console.log("************** location path" + location.path());
  expect(location.path()).toBe('/list-items'); 

  
}));


it("should test component update item using spy" ,
() => { 

   
 let itemArray =      
 [  {
   "id" : "T20000",
   "title": "my test task",
   "done": false,
   "project": true,
   "when": "8:00",
   "deadline": new Date("2021-09-27T16:46:50.990Z"),
   "details": "test details",
   "parent": "-1"
  }
 ];

 let item : Item =   {
   "id" : "T20001",
   "title": "my test task",
   "done": false,
   "project": true,
   "when": "8:00",
   "deadline": new Date("2021-09-27T16:46:50.990Z"),
   "details": "test details",
   "parent": "-1"
  };

 let  observableItem = from (JSON.stringify(item));

 
 

 //dataServiceSpy.saveItem.and.returnValue(observableItem);
// spyOn(service, 'saveItem').and.returnValue(observableItem);
 //spyOn(component, 'addItemInList').and.;
spyOn(service, 'updateItem').and.returnValue(observableItem);
 
 component.item = item;
 component.updateItem();
 //fixture.detectChanges();
expect(service.updateItem).toHaveBeenCalledTimes(1);

expect(service.updateItem(item)).toBeInstanceOf(Observable);

//service.updateItem(item)._subscribe() ;


// expect(dataServiceSpy.getItems.calls.count())
 //.toBe(1, 'spy method was called once');



});


it("should get projects from service for dropdown" ,
() => { 

   
 let itemArray : Item [] =      
 [  {
   "id" : "T20000",
   "title": "my test task",
   "done": false,
   "project": true,
   "when": "8:00",
   "deadline": new Date("2021-09-27T16:46:50.990Z"),
   "details": "test details",
   "parent": "-1"
  }
 ];

 let item : Item =   {
   "id" : "T20001",
   "title": "my test task",
   "done": false,
   "project": true,
   "when": "8:00",
   "deadline": new Date("2021-09-27T16:46:50.990Z"),
   "details": "test details",
   "parent": "-1"
  };

 let  observableItem = from (JSON.stringify(item));


// let observableArray : Observable<Item []> = from ( itemArray);
 

 //dataServiceSpy.saveItem.and.returnValue(observableItem);
// spyOn(service, 'saveItem').and.returnValue(observableItem);
 //spyOn(component, 'addItemInList').and.;
spyOn(service, 'getAllProjects').and.returnValue(of(itemArray));
 
 
 component.ngOnInit();
 expect(component.projects[0].title).toEqual("my test task");
 
 //fixture.detectChanges();
expect(service.getAllProjects).toHaveBeenCalledTimes(1);

//expect(service.getAllProjects).toBeInstanceOf();

//service.updateItem(item)._subscribe() ;


// expect(dataServiceSpy.getItems.calls.count())
 //.toBe(1, 'spy method was called once');



});




});
