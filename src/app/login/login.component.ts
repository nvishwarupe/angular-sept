import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



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

  ngOnInit(): void {
  }



  login(){
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.auth.login();
      this.router.navigate(['list-items'])

    } else 
     {
       this.error = true;
     }
  }

}
