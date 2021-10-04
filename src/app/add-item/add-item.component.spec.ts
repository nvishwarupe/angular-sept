import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';
import { DataService } from '../data.service';
import { Item } from '../item';

import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let service : DataService;
  let http : HttpClient;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule,  RouterTestingModule],
      declarations: [ AddItemComponent ],
      providers : [DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataService);

  });

  // this component should be removed not used - add item is done through list 
  // component 
  it('should create', () => {
    expect(component).toBeTruthy();
  });



  
 
});
