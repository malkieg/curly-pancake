import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;

  constructor() {
    this.counter = 0;
  }
// button clicked counter increase/decrease by one and the counter will be set as a string in output which will be displayed by the browser
  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
    // how to convert a number into a string
    // https://stackoverflow.com/questions/32554624/casting-a-number-to-a-string-in-typescript
    this.output = String(this.counter);
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
    this.output = String(this.counter);
  }
}
