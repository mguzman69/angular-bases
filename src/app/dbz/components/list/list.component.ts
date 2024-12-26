import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  imports: [NgFor,NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  @Input()
  public characterList: Character [] = [ ]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  public onDeleteCharacter(index:number): void {
    // Todo Emitir el ID del personaje
    console.log('onDeleteCharacter',index)
    this.characterList.splice(index,1);
  }
}
