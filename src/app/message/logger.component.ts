import { LoggerService } from "../logger.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-log-info',
  providers: [LoggerService],
  template: `
    <div *ngFor="let info of logger.infos">{{info}}</div>
  `
})
export class LoggerComponent {
  constructor(private logger: LoggerService) { }

}
