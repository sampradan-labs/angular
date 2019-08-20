import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-io-l1',
  templateUrl: './use-io-l1.component.html',
  styleUrls: ['./use-io-l1.component.css']
})
export class UseIoL1Component implements OnInit {
  useC2CProperty:string = "This property is from UseC2C component";
  constructor() { }

  ngOnInit() {
  }
  useC2CFunction(){
    this.useC2CProperty = "This value from function in component UseC2C";
  }
}
