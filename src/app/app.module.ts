import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ts2landingComponent } from 'ts2landing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ts2landingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
