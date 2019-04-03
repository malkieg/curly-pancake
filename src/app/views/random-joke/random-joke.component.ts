import { Component, OnInit } from '@angular/core';
import { RandomJokeService} from '../../models/services/random-joke.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  jokeUrl: string;
  constructor(private joke: RandomJokeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.joke.getRandomJoke().subscribe(
      (result) => {
        this.jokeUrl = result.message;
        console.log(result);
      }
    );
  }

}
