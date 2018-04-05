import { Hero } from "../heroes/hero.model";
import { Component, Input } from "@angular/core";
@Component({
  selector: 'app-interaction-child',
  template: `
  <div>
    {{master}}, I'm id: {{hero.id}}, name: {{hero.name}}
  </div>
  `
})
export class InteractionChildComponent {
  @Input() hero: Hero;
  @Input() master: string;
}