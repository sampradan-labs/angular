import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NpmSearchComponent } from './npm-search/npm-search.component';
import { L1HttpObservableComponent } from './l1-http-observable/l1-http-observable.component';
import { HttpPromiseL1Component } from './http-promise-l1/http-promise-l1.component';
import { WithInterceptersComponent } from './with-intercepters/with-intercepters.component';
import { InterceptService } from './intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    NpmSearchComponent,
    L1HttpObservableComponent,
    HttpPromiseL1Component,
    WithInterceptersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
