import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  styleUrl: './app-counter.component.css',
  template: `
    <h3> Contador: {{ counter }} </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  constructor() { }
  counter: number = 1;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 1;
  }
}

