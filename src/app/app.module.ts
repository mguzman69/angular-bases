import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/hero.module';
import { MainPageComponent } from "./dbz/pages/main-page.component";
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from "./dbz/components/list/list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    MainPageComponent,
    DbzModule,
    ListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
