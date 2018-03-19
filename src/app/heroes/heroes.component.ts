
import { HeroService } from '../hero.service';
import { Hero } from './hero.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
  this.getHeroes();
  }

  getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => {this.heroes = heroes; console.log(this.heroes.length)});
  }
}
