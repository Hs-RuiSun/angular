import {Directive} from '@angular/core';

@Directive({
    selector: '[logOnClick]',
    host: {
        '(click)': 'onClick()',
    },
})
export class LogDirective {
  constructor() {}
  
  onClick() {
    console.log('Element clicked!');
  }
}

@Directive({
  selector: 'button[counting]',
  host: {
    '(click)': 'onClick($event.target)'
  }
})
export class CountClickDirective {
  numberOfClicks = 0;

  onClick(btn: any) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}