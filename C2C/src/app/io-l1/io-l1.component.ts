import { Component, OnInit, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-io-l1',
  templateUrl: './io-l1.component.html',
  styleUrls: ['./io-l1.component.css']
})
export class IoL1Component implements OnInit {

    //works for all [] bindings
  //works for all () bindings
@Input() propToShare
@Output() customEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
