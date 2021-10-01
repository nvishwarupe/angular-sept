import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

import { Item} from './item';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { of } from 'rxjs';



describe('DataService', () => {
 
  let service: DataService;
  let httpMock : HttpTestingController;
  let httpClient : HttpClient;

  
  let projectItem1 : Item = 
  {
    "id": "T20000",
    "title": "my test task",
    "done": false,
    "project": true,
    "when": "8:00",
    "deadline": new Date("2021-09-27T16:46:50.990Z"),
    "details": "test details",
    "parent": "-1"
  } ;
  
  let taskItem1 : Item = 
  {
    "id": "T200001",
    "title": "my test task",
    "done": false,
    "project": false,
    "when": "8:00",
    "deadline": new Date("2021-09-27T16:46:50.990Z"),
    "details": "test details",
    "parent": "T20000"
  } ;
  


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule , HttpClientTestingModule],
      providers : [DataService]
    });
    
    
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataService);
    httpClient = TestBed.inject(HttpClient);
    
    //service.saveItem(taskItem1).subscribe(() => {
      
    //})
    

  

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


    

  
  

  /*it("should create a project" , (done) => {
    service.saveItem(projectItem1).subscribe(() => {
      (_err: any) => { console.log(_err)}
      done();
    });
   
  });


  it('should fetch all tasks', () => {
     service.getItems().subscribe((items) => {
        let task = items.find((item) => item.id === taskItem1.id)
        expect(task).toBeDefined();
     });
  });




  afterEach((done) => {
    service.deleteItem(projectItem1.id).subscribe(() => {
      done();
    });
    service.deleteItem(taskItem1.id).subscribe(() => {
      done();
    });
   

  });


*/

});
