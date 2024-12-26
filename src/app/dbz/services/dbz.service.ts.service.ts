import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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

  constructor() { }

}
