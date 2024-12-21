import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  imports: [CommonModule],
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor']
  public deletedHero: string = '';

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop()!;
  }
}
