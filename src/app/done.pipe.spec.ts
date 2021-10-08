import { DonePipe } from './done.pipe';
import { Item } from './item';

describe('DonePipe', () => {
  it('create an instance', () => {
    const pipe = new DonePipe();
    expect(pipe).toBeTruthy();
  });


  it('test done pipe', () => {
    
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
      "title": "my test task",
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
      "id": "T200001",
      "title": "my test task",
      "done": true,
      "project": false,
      "when": "8:00",
      "deadline": new Date("2021-09-27T16:46:50.990Z"),
      "details": "test details",
      "parent": "-1"
    }
  ];


  const pipe = new DonePipe();
  let resultArray = pipe.transform(dummyItemArray , true) 
  expect(resultArray).toEqual(filteredArrayResult);

  });



});
