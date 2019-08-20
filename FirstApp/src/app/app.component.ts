import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   // template: '<div> <app-simple-form></app-simple-form></div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = 'app works!';
doSomething(){
    this.title = "Done something...";
}
}
