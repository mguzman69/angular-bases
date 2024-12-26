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
      power: 1000
    },{
      name:'Goku',
      power: 10000
    },{
      name: 'Vegeta',
      power: 6000
    }
  ];

}
