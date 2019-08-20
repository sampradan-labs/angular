import { Component } from '@angular/core';
import { FacebookService } from './facebook.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
AppComponentProperty:string
constructor(private fb:FacebookService){
    console.log(fb.notifications);
}

    //Implementing the newly created update event handler
onUpdate(id, text){
    this.fb.updateFbMessage(id, text);
}
}
