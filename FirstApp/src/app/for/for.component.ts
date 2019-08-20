import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  players:any = [];

Login():string{
  return "Logged in";
}
  constructor() { }

  ngOnInit() {
    this.players.push({id:100, name:'MS Dhoni' });
    this.players.push({id:101, name:'Sachin Tendulkar'});
    this.players.push({id:102, name: 'Rohit Sharma'})
  }

}
