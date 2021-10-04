import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { Location} from '@angular/common';
import { AuthService } from '../auth.service';
import {FormsModule, NgForm} from '@angular/forms';
import { DataService } from '../data.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let location: Location;
  let authService : AuthService;
  let dataService : DataService;
  let httpMock : HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [ FormsModule, RouterTestingModule.withRoutes(
        [{ path: "login" , component: LoginComponent} ,
        { path: "item-list" , component: ItemListComponent}]

        ), HttpClientTestingModule ],
        providers :[DataService, AuthService, HttpTestingController, HttpClient] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    dataService = TestBed.inject(DataService);
    
    router = TestBed.get(Router);
    location = TestBed.inject(Location);
    httpMock = TestBed.get(HttpTestingController);
    let dataServiceSpy = jasmine.createSpyObj('DataService', ['getItems', 'saveItem']);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test invalid login functionality', () => {
     
    const nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username-id");
    const namePassword: HTMLInputElement = <HTMLInputElement>document.getElementById("passoword-id");
    const submitButton: HTMLInputElement = <HTMLInputElement>document.getElementById("button-id");

    // simulate user entering a new name into the input box
    nameInput.value = 'wrong name';
  
    submitButton.click();
  
    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();
    const errorDisplay: HTMLInputElement = <HTMLInputElement>document.getElementById("error-id");
  

    expect(errorDisplay.textContent?.trim()).toBe(component.errorMessage);
  


  });


  it('should test login functionality', fakeAsync( () => {
     
    var nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username-id");
    var namePassword: HTMLInputElement = <HTMLInputElement>document.getElementById("password-id");
    var submitButton: HTMLInputElement = <HTMLInputElement>document.getElementById("button-id");

    // simulate user entering a new name into the input box
    nameInput.value = 'admin';
    namePassword.value= 'admin';

    const onClickMock = spyOn(component, 'login' );

    submitButton.click();

  
    // Tell Angular to update the display binding through the title pipe
    //fixture.detectChanges();
    tick();
  expect(onClickMock).toHaveBeenCalled();
  // check if component is in logged in state    
  expect(component.error).toBe(false);

  expect(component.error).toBe(false);

  }));


  it('should route to login page', fakeAsync(() => {
    spyOn(authService, 'canActivate').and.returnValue(true);
    
    
  
    router.navigate(["login"]);
    tick();
    console.log("************** location path" + location.path());
    expect(location.path()).toBe('/login'); 
  
    
  }));




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
  
       
     // dataServiceSpy.getItems.and.returnValue(itemArrayObservable);
      spyOn(dataService,'getItems').and.returnValue(of(itemArray));
  
    router.navigate(["item-list"]);
    tick();
    console.log("************** location path" + location.path());
    expect(location.path()).toBe('/item-list'); 
  
    
  }));
  

  


});
