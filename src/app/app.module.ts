import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/app-counter.component';
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent,
    HeroComponent,
    ListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
