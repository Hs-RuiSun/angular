import { Hero } from "../heroes/hero.model";
import { Component, Input, SimpleChanges } from "@angular/core";
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
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
  }
   
  ngOnInit() {
    console.log('OnInit');
  }
}