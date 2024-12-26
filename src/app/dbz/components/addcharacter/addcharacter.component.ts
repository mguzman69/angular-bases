import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
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
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name  : 'ABC',
    power : 0
  }

  emitCharacter():void {
    console.log('In emitCharacter',this.character);
    if (this.character.name.length === 0) return;
    if (this.character.power < 0) return;

    this.onNewCharacter.emit(this.character);

    //Usar esta sintaxis que crea un nuevo objecto para this.character
    this.character = { name: '', power:0};

    //No usar esto, ya que solo cambia los nombre y poder del objeto actual
    //this.character.name = '';
    //this.character.power = 0;
  }
}
