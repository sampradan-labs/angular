import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-with-intercepters',
  templateUrl: './with-intercepters.component.html',
  styleUrls: ['./with-intercepters.component.css']
})
export class WithInterceptersComponent implements OnInit {

  constructor(public login:LoginService, public http:HttpClient) { }
  data;
  ngOnInit() {
    this.login.getAuthToken();
  }
  

}
