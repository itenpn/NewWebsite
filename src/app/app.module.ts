import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    Body1Component,
    Body2Component,
    AboutmeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
