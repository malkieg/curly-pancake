import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomJokeService {

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable <any> {
    return this.http.get('https://icanhazdadjoke.com/');
  }
}
