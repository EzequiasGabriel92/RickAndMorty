import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { modelCharacter } from 'src/app/core/models/modelCharacter.interface';
import { RequestService } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  method = 'character'
  constructor(private requestService : RequestService) { }

  getCharacters(): Observable <modelCharacter[]>{
    return this.requestService.get(this.method).pipe(
      map(res => {
        console.log(res);
        return res.results
      })
    );
  }
}
