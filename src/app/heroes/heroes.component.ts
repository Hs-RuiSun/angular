
import { HeroService } from '../hero.service';
import { Hero } from './hero.model';
import { Component } from '@angular/core';
import { Routes } from "@angular/router";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
  this.getHeroes();
  }

  getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes.length);
    });
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero): void {
 this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
