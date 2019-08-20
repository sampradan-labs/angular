import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

const reqHeaders = new HttpHeaders()
                          .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: 'root'
})
export class HttpAsServiceService {

  constructor(private objHttp: HttpClient) { }

  GetWithParams(){
    // http://localhost:3000/Customers?_page=1&_limit=1
  const params = new HttpParams().set('_page',"1")
                                 .set('_limit',"1");
  
  return this.objHttp.get<Customer[]>("localhost:3000/Customers",{headers:reqHeaders,params});
              
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
