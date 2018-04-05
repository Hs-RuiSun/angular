import { HEROES } from "../monk.heroes";
import { Component } from "@angular/core";
@Component({
  selector: 'app-interaction-parent',
  template: `
  <div>
    <label>pass data from parent to child</label>
    {{master}} is in charge of {{heroes.length}}, including:
    <app-interaction-child *ngFor="let hero of heroes" [hero]=hero [master]=master>
    </app-interaction-child>
    <br>
    <label>intercept input property changes with setter</label>
    <app-interaction-setter *ngFor="let name of names" [name]=name>
    </app-interaction-setter>

    <br>
    <label>parent listens for child event</label><br>
    <label>Agree: {{agreed}}, Disagree: {{disagreed}}</label>
    <app-interaction-voter *ngFor="let name of names" [name]=name (onVoted)="onVoted($event)">
    </app-interaction-voter>
  </div>
  `
})
export class InteractionComponent {
   heroes = HEROES;
   master = "Master";
   names: string[] = ['May', "July", "Marctin"];
  
  agreed = 0;
  disagreed = 0;
  
   onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
   }
}