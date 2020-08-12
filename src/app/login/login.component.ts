import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  pwd:string = "";
  users:any = [
    {'email':'tfc@com.au', 'pwd': '12'}
  ];
  errormsg = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signin(event){
    event.preventDefault();
    console.log("Working")
    for (let i=0; i<this.users.length; i++) {
      if (this.users[i].email == this.email && this.users[i].pwd) {
        this.router.navigate(['/account']);
      }
    }
    this.errormsg = "Invalid input";
  }

}
