import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
url = 'https://icanhazdadjoke.com';
requestOptions = {
  headers: {
    Accept: 'application/json'
  }

};
  constructor() { }
}
