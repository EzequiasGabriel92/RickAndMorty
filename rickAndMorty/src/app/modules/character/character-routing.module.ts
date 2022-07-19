import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';

const routes: Routes = [
  {
    path: '',
    component: ListCharactersComponent
  },
  {
    path: 'view-character',
    component: ViewCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
