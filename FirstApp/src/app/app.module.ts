import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SwitchComponent } from './switch/switch.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SwitchComponent,
    IfComponent,
    ForComponent,
    RformComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, SimpleFormComponent]
})
export class AppModule { }
