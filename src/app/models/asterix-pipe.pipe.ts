import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterixPipe'
})
export class AsterixPipePipe implements PipeTransform {
  x = '*';
  transform(counter: number): any {
    if (counter < 5) {
      return '';
    } else if (counter === 5) {
      return this.x;
    } else if (counter % 5 === 0) {
        this.x = this.x + '*';
        return this.x;
      } else {
        return this.x;
      }
    }

}
