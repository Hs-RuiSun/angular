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