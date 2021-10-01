import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginMessage: string = "Please log in to use the application"
  constructor(private router: Router) { }


  ngOnInit(): void {
  }



  loginApp(){
      this.router.navigate(['login']);

  }


}
