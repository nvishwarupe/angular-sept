import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';

  isLoggedIn = false;
  constructor(private auth: AuthService, private router: Router){
      
  }


  ngOnInit() : void{
    

    
  }

  logout(){
      this.auth.logout();
      this.router.navigate(['/'])

  }

  isUserLoggedIn(){
    return this.auth.getIsLoggedIn();
  }



}
