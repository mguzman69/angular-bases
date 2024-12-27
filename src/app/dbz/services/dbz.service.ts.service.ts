import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500
  },{
    id: uuid(),
    name:'Goku',
    power: 2000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 1500
  }
];

/**
 * Adds a new character to the characters array if it doesn't already exist
 * @param character - The character object to be added
 * @returns void
 * @description
 * This method performs the following:
 * 1. Checks if a character with the same name already exists
 * 2. If it exists, returns early without adding
 * 3. If it's new, creates a copy of the character with a new UUID
 * 4. Adds the new character to the characters array
 */
NewCharacter( character:Character ):void {
  if (this.characters.find( personaje => personaje.name === character.name)) return;

  //usar ...character copia todos los atributos que tenga character de manera automatica, luego los campos nuevos
  const newChar: Character = {...character,  id: uuid()}

  this.characters.push( newChar );
  console.log(newChar);
}

/**
 * Deletes a character from the characters list based on the provided ID.
 *
 * @param {string} id - The ID of the character to be deleted.
 * @returns {void}
 */
DeleteCharacter(id:string):void {
  console.log('XXX borrando en servicio id',id);
  this.characters = this.characters.filter(char => char.id !== id);
}
  constructor() { }

}
