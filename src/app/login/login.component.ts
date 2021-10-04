import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  username : string = "";;
  password : string = "";

  error : boolean = false;
  errorMessage : string = "Username and/or Password are incorrect.";

  ngOnInit(): void {
  }



  login(){
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.auth.login();
      this.error = false;
      this.router.navigate(['list-items'])

    } else 
     {
       this.error = true;
     }
  }

}
