import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  imports: [CommonModule],
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'Ironman'
  public age:  number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
     this.name = 'ironman';
     this.age = 45;
  }
}