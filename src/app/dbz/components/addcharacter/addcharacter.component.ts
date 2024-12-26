import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-add-character',
  imports: [FormsModule , CommonModule],
  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  public character: Character = {
    name  : 'ABC',
    power : 0
  }

  emitCharacter():void {
    console.log(this.character)
  }
}
