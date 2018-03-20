import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero.model';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'hero-detail',
  templateUrl: './heroes-get.component.html',
  styleUrls: ['./heroes-get.component.css']
})
export class HeroesGetComponent {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
  this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
  return this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack() {
  this.location.back();
  }

  save() {
  this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }
}
