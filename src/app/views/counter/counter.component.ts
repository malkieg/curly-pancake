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

  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
    this.output = String(this.counter);
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
    this.output = String(this.counter);
  }
}
