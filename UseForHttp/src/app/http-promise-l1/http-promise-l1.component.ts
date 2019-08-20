import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-promise-l1',
  templateUrl: './http-promise-l1.component.html',
  styleUrls: ['./http-promise-l1.component.css']
})
export class HttpPromiseL1Component implements OnInit {

  result;
  public status:string = "";
  constructor(private objHttp:HttpClient) { }

  ngOnInit() {
    this.objHttp.get("http://jsonplaceholder.typicode.com/posts")
                .toPromise()
                  .then(data => {console.log(data)})
                  ,error => console.error("error",error);

    this.GetCall();
  }

  GetCall(){
    this.objHttp.get("http://127.0.0.1:3000/customers")
                .toPromise()
                .then(
                  data => {this.result = data; this.status = "Received data successfully!"},
                  error => {this.status = "Error receiving data"; console.error(error);}
                )
                ;
    return this.status;
  }

  PostCall(){
    this.objHttp.post("http://127.0.0.1:3000/customers",
        {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
        })
        .toPromise()
        .then(
            data => {
                console.log("POST Request is successful ", data);
                this.status = "POST Request is successful";
            },
            error => {
                console.log("Error", error);
                this.status = "Error";
            }
        );    
  }

  
}
