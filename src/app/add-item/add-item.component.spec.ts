import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { DataService } from '../data.service';
import { Item } from '../item';

import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let service : DataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
