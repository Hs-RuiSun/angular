import { HeroService } from "../hero.service";
import { Hero } from "./hero.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subject } from "rxjs";
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: [ './heroes-search.component.css' ]
})
export class HeroesSearchComponent implements OnInit{
  heroes: Observable<Hero[]>;
  
  private searchTerms = new Subject<string>();
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void{
  this.heroes = this.searchTerms.pipe(
    debounceTime(300),
    
    distinctUntilChanged(),
    
    switchMap((term: string) => this.heroService.searchHeroes(term)),
  );
  }
  
  search(name: string){
    this.searchTerms.next(name);
  }
}