import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { SettingsService} from './settings.service';

export interface Joke {
  id: string;
  joke: string;
  message?: string;
  status: number;
}
@Injectable({
  providedIn: 'root'
})
export class RandomJokeService {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  public getRandomJoke(): Observable<Joke> {
    return this.http.get(this.settings.url, {
      headers: {
        Accept: 'application/json'
      }
    }).pipe(map((response: Joke) => response));
  }
}
