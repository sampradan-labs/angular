import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {
  canActivate(): boolean 
  {
    window.alert("You don't have permission to view this page");
      // Check weather the route can be activated;
      return false; 
      // or false if you want to cancel the navigation; 
  }
  constructor() { }

}

// The Angular Router supports Five different guards, which you can use to protect the route

// CanActivate: Authentication & Authorization
// CanDeactivate: This route is useful in where the user might have some pending changes,
//                which was not saved
// Resolve: This guard delays the activation of the route until some tasks are completed.
            // Backend operation
// CanLoad
    //load feature modules dynamically
// CanActivateChild
    //This guard determines whether a child route can be activated.
