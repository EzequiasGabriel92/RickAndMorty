import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(method: string): Observable<any>{
    const url = `${environment.url_base}${method}`;
    return this.httpClient.get(url)
  }
}
