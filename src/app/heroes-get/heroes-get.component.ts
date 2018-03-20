import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hero-detail',
  templateUrl: './heroes-get.component.html'
})
export class HeroesGetComponent {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
  this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
  return this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
}
