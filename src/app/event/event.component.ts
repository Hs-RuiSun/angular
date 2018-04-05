import { Component } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-event',
  template: `
  `,
})
export class EventComponent {
  public counter$: Observable<number> = new Subject<number>();
  
  constructor() {
    this.counter$.subscribe(console.log.bind(console));
  }
}