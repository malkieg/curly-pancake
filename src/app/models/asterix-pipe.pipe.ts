import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterixPipe'
})
export class AsterixPipePipe implements PipeTransform {
  x = '';
  y = 0;
  transform(counter: number): any {
    // if the number is divisble by 5 then add an asterix
     if (counter % 5 === 0) {
        this.y = counter / 5;
        this.x = '';
        while (this.y > 0) {
          this.x = this.x + '*';
          this.y--;
        }
        return this.x;
        // if its not divisble by 5 then keep showing the previous asterixs
      } else {
        return this.x;
      }
    }

}
