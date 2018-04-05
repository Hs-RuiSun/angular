import { Hero } from "../heroes/hero.model";
import { OnChangesComponent } from './on-changes.component';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero(1, '');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
