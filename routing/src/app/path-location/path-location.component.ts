import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-location',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './path-location.component.html',
  styleUrls: ['./path-location.component.css']
})
export class PathLocationComponent implements OnInit {
  location: Location;
  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }

}
