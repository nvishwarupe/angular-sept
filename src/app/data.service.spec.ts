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
  

  let dummyItemArray : Item[] = 
  [
  {
    "id": "T200001",
    "title": "my test task",
    "done": false,
    "project": false,
    "when": "8:00",
    "deadline": new Date("2021-09-27T16:46:50.990Z"),
    "details": "test details",
    "parent": "T20000"
  } 
];
  



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule ],
      providers : [DataService]
    });
    
    
    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);

    //httpClient = TestBed.inject(HttpClient);
    
    //service.saveItem(taskItem1).subscribe(() => {
      
    //})
    

  

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


    

  
  

  it("should test getitems" , () => {
    /*service.saveItem(projectItem1).subscribe(() => {
      (_err: any) => { console.log(_err)}
      done();
    });
   */

   
   let spyDataService = spyOn(service, 'getItems').and.callThrough();
 
   

   service.getItems().subscribe(() => {
    // let task = items.find((item) => item.id === taskItem1.id)
     //expect(task).toBeDefined();
  });

   
    const  req = httpMock.expectOne(`/items`);
    console.log("request url **************" + req.request.url);

    expect(req.request.method).toBe("GET");

    req.flush(dummyItemArray);
    
    httpMock.verify();
    

  });



  it("should test getitem with id" , () => {
    /*service.saveItem(projectItem1).subscribe(() => {
      (_err: any) => { console.log(_err)}
      done();
    });
   */

   
   let spyDataService = spyOn(service, 'getItem').and.callThrough();
 
   

   service.getItem("dummyid").subscribe(() => {
    // let task = items.find((item) => item.id === taskItem1.id)
     //expect(task).toBeDefined();
  });

   
    const  req = httpMock.expectOne(`/items/dummyid`);
    console.log("request url **************" + req.request.url);

    expect(req.request.method).toBe("GET");

    req.flush(projectItem1);
    
    httpMock.verify();
    

  });
  


  
/*

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
