import { Item } from './item';
import { TitlePipe } from './title.pipe';

describe('TitlePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlePipe();
    expect(pipe).toBeTruthy();
  });


  it('test title pipe', () => {
    
    let dummyItemArray : Item[] = 
    [
      {
        "id": "T200001",
        "title": "my test task",
        "done": true,
        "project": false,
        "when": "8:00",
        "deadline": new Date("2021-09-27T16:46:50.990Z"),
        "details": "test details",
        "parent": "-1"
      } ,
      {
        "id": "T200002",
        "title": "my angular task",
        "done": false,
        "project": false,
        "when": "8:00",
        "deadline": new Date("2021-09-27T16:46:50.990Z"),
        "details": "test details",
        "parent": "-1"
      }
    ];
  
    let filteredArrayResult = [
      {
        "id": "T200002",
        "title": "my angular task",
        "done": false,
        "project": false,
        "when": "8:00",
        "deadline": new Date("2021-09-27T16:46:50.990Z"),
        "details": "test details",
        "parent": "-1"
      }
    ];
  
  
    const pipe = new TitlePipe();
    let resultArray = pipe.transform(dummyItemArray , "angular", true) 
    expect(resultArray).toEqual(filteredArrayResult);
  
    });
  
  

});
