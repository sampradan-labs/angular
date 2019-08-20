import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
public person:string = "Mohan";
public personList = [];
  constructor() { 
    
  }
AddToList(){
this.personList.push(this.person);
}

ngOnInit() {
  }

}
