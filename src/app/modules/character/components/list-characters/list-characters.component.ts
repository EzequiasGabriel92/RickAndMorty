import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { modelCharacter } from 'src/app/core/models/modelCharacter.interface';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  itemsCharacters$!: Observable<modelCharacter[]>;
  columns = [{name: 'Name', prop: 'name'}, {name: 'Status', prop: 'status'}, {prop: 'species'}, { name: 'Gender' }]

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){

    this.itemsCharacters$ = this.characterService.getCharacters();

  }

}
