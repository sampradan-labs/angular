import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

export const headers = new HttpHeaders()
                          .set("Access-Control-Allow-Origin", "*");

@Component({
  selector: 'app-l1-http-observable',
  templateUrl: './l1-http-observable.component.html',
  styleUrls: ['./l1-http-observable.component.css']
})
export class L1HttpObservableComponent implements OnInit {
customers:Customer[];
posts:Posts[];
status:string;

//To run this example, use json-server
//>npm install -g json-server
//>json-server --watch db.json
  constructor(private objHttp: HttpClient) {
    
   }
  
  ngOnInit() {
    //make the http call
   this.objHttp.get<Posts[]>("http://jsonplaceholder.typicode.com/posts")
                                    .subscribe(
                                    (data) => {console.log("Get Request successful", data);
                                              this.posts = data;
                                              this.status = "Get Request successful";
                                            },
                                    error => {
                                      console.error(error);
                                      this.status = "Error";
                                    }
                                  );
  }

  GetWithParams(){
      // http://localhost:3000/Customers?_page=1&_limit=1
    const params = new HttpParams().set('_page',"1")
                                   .set('_limit',"1");
    
    this.objHttp.get<Customer[]>("localhost:3000/Customers",{headers,params})
                .subscribe(
                            data => {console.log("Get Request successful", data);
                                      this.customers = data;
                                      this.status = "Get Request successful";
                                     },
                            error => {
                                      console.log("Error in http get"); 
                                      this.status = "Error";
                                  }
                            
                          );
  }
  PostCall(){
    this.objHttp.post("http://127.0.0.1:3000/customers",
        {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
        })
        .subscribe(
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

  PutCall(){
    this.objHttp.put("http://localhost:3000/customers/1",
        {
            "name": "NewCustomer001",
            "email": "newcustomer001@email.com",
            "tel": "0000252525"
        })
        .subscribe(
            data => {
                console.log("PUT Request is successful ", data);
                this.status = "PUT Request is successful ";
            },
            error => {
                console.log("Error", error);
                this.status = "Error";
            }
        );
  }

  DeleteCall(){
    this.objHttp.delete("http://localhost:3000/customers/1")
        .subscribe(
            data => {
                console.log("Delete Request is successful ", data);
                this.status = "Delete Request is successful ";
            },
            error => {
                console.log("Error", error);
                this.status = "Error";
            }
        );          
  }

 

}

class Customer{
  id : number;
  name: string;
  email: string;
  tel: string;
}

class Posts{
  userId;
  title;
  body;
}
