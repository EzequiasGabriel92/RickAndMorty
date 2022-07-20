import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ViewCharacterComponent } from './components/view-character/view-character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewCharacterComponent,
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
