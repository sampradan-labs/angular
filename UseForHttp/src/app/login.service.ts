import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getAuthToken(){
    return "AUTHTOKEN-12345-67890-12345-67890";
  }

  constructor() { }
}
