import { Component, EventEmitter, Input, Output } from '@angular/core';
import { max } from 'rxjs/operator/max';

@Component({
  selector: 'app-sizer',
  template: `
  <div>
  <input type="button" (click)="dec()" value="-">
  <input type="button" (click)="inc()" value="+">
  <span [style.font-size.px]="fontSize">FontSize:</span>{{fontSize}}
  </div>
  `
})
export class SizerComponent {
fontSize: number = 6;
sizeChange = new EventEmitter();

dec() {
  this.resize(-1);
}

inc() {
  this.resize(1);
}

  resize(num: number) {
    this.fontSize = Math.min(20, Math.max(6, this.fontSize + num));
    this.sizeChange.emit();
}
}
