import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoundPipe } from './round.pipe';
import { ReversePipe } from './reverse.pipe';
import { TestPipe } from './test.pipe';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
import { AsyncPromiseComponent } from './async-promise/async-promise.component';

import {BookService} from './book.service';
import { ConditionalPipesComponent } from './conditional-pipes/conditional-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
    ReversePipe,
    TestPipe,
    AsyncObservableComponent,
    AsyncPromiseComponent,
    ConditionalPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
