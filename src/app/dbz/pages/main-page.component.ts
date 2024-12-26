import { Component, Input, input, OnInit } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddCharacterComponent } from '../components/addcharacter/addcharacter.component';
import { Character } from '../interfaces/character.interface';
import { NgModel } from '@angular/forms';
import { DbzService } from '../services/dbz.service.ts.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  imports: [ListComponent,AddCharacterComponent]
})

export class MainPageComponent  {
  constructor (public  dbzService: DbzService ) {

  }

}
