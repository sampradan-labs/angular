import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  name:string = 'Neha';
  pwd:string = 'p@ssw0rd';
  status:string = '';
  doLogin(username:string, pwd:string, placeholder?){
    if(placeholder != undefined){
      placeholder.style = 'display:block';
    }
    this.status = 'Login successful for user: '+this.name;
  }
  ngOnInit() {
  }

}
