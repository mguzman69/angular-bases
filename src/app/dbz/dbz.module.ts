import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../heroes/list/list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListComponent,
    FormsModule
  ],
  exports: [  ]
})
export class DbzModule { }
