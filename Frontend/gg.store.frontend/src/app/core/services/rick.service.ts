import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickService {
  constructor() {}

  getCharacters() {
    return fetch(`${environment.api}/character`).then((res) => res.json());
  }
}
