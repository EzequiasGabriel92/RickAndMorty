import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { modelCharacter } from 'src/app/core/models/modelCharacter.interface';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent implements OnInit {

  itemsCharacter$!: Observable<any>;
  id!: number;

  constructor(
    private characterService: CharacterService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      this.id = +params.get('id');
      this.getCharacter(this.id);
    });

  }

  getCharacter(id: number){
    this.itemsCharacter$ =  this.characterService.getCharacter(id);
  }


}
