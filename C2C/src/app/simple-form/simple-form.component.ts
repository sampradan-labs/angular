import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { FacebookService } from './../facebook.service'
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

    //Creating a property that can accept a binding using [] viz. class to html
    @Input() getBinding;
    //Create an event called update. Trigger it through the html
    //Creating a function that can accept a binding using () viz. html to class
    //In short this function will be exposed as an event
    //Implement it inside the simple-form component
    @Output() update = new EventEmitter();
    
constructor() { 
    //Uncomment to see two-way binding happening every 2s
    //setInterval(()=>this.notification = Math.random().toString(), 2000);
}

  ngOnInit() {
  }

}
