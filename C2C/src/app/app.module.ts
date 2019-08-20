import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FacebookService } from './facebook.service';
import { IoL1Component } from './io-l1/io-l1.component';
import { UseIoL1Component } from './use-io-l1/use-io-l1.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    IoL1Component,
    UseIoL1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
