import { Component, OnInit, OnDestroy } from '@angular/core';
// Subject is both an Observable and Observer.

// Observer — he has the next, error, and complete methods.
// Observable — he has all the Observable operators, and you can subscribe to him.
import  'rxjs/operators';
import { Observable, Subject } from 'rxjs';
//switchMap: Map to observable, complete previous inner observable, emit values.
//debounceTime: Used to wait for a few milliseconds before starting processing
//distinctUntilChanged: Only emit when the current value is different than the last.
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

//The actual service that calls npmsearch.com, to get realtime npm packages
import { NpmPackageInfo, SearchPkgService } from '../search-pkg.service';
@Component({
  selector: 'app-npm-search',
  templateUrl: './npm-search.component.html',
  styleUrls: ['./npm-search.component.css']
})
export class NpmSearchComponent implements OnInit, OnDestroy {
  withRefresh = false;
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();


 //Actual npm search
  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((packageName) =>
        this.searchService.search(packageName, this.withRefresh))
    );
    this.usingSubscribe();
  }

  public simplePackages:any;
  public searchString:string;
  private ngUnsubscribe: Subject<NpmPackageInfo> = new Subject();
usingSubscribe(){
  this.packages$=this.searchService
        .searchWithSubscribe("this.searchString", this.withRefresh)
                      
  this.packages$.pipe(
    takeUntil(this.ngUnsubscribe))
    .subscribe((data) => this.simplePackages = data)
                    
}

ngOnDestroy(){
this.ngUnsubscribe.next();
this.ngUnsubscribe.complete();
}
  constructor(private searchService: SearchPkgService) { }


  toggleRefresh() { this.withRefresh = ! this.withRefresh; }


 
}


