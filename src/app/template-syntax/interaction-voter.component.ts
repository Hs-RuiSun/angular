import { Component, EventEmitter, Output, Input } from "@angular/core";
@Component({
  selector: 'app-interaction-voter',
  template: `
  <h4>{{name}}</h4>
  <button (click)=vote(true) [disabled]="voted">agree</button>
  <button (click)=vote(false) [disabled]="voted">disagree</button>
  `
})
export class InteractionVoterComponent {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}