import { Component, Input, input, OnInit } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddCharacterComponent } from '../components/addcharacter/addcharacter.component';
import { Character } from '../interfaces/character.interface';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main.component.html',
  imports: [ListComponent,AddCharacterComponent]
})

export class MainPageComponent  {
  public characters: Character[] = [{
      name: 'Krillin',
      power: 500
    },{
      name:'Goku',
      power: 2000
    },{
      name: 'Vegeta',
      power: 1500
    }
  ];

  onNewCharacter( character:Character ):void {
    //console.log('MainPage');
    //console.log(character);
    if (this.characters.find(personaje => personaje.name === character.name)) return;

    this.characters.push( character );
  }

  onDeleteCharacter( index: number):void {
    console.log('onDeleteCharacter( index: number):void');
    this.characters.splice(index,1);
  }

}
