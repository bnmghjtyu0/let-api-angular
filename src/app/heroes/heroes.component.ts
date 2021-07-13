import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    console.log(hero)
    this.selectedHero = hero;
  }

  ngOnInit(): void {}
}
