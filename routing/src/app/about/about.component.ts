import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

sub:any;
id:any;
constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub  = this.route.params.subscribe(params => {this.id = params['id']});
  }
    
ngOnDestroy(){
    this.sub.unsubscribe();
}

}
