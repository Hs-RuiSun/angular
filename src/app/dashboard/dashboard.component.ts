import { HeroService } from "../hero.service";
import { Hero } from "../heroes/hero.model";
import { Component } from "@angular/core";

@Component({
  selector: 'dashborad-hero',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  
  ngOnInit() {
  this.getHeroes();
  }
  
  getHeroes() {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(0,4));
  }
}