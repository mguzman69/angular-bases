import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  @Input()
  public characterList: Character [] = [{
      name: 'Trunks',
      power: 10
    }
  ]
}
