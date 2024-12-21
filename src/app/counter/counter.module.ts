import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/app-counter.component";

@NgModule({
  imports: [
    CounterComponent,
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {}
