import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-lifecycle',
  providers: [LoggerService],
  templateUrl: './lifecycle-component.html'
})
export class LifeCycleComponent implements OnInit {

  message = 'default';

  constructor(private logger: LoggerService) {}
  
  ngOnInit() {
    this.logger.info('OnInit');
  }

  ngOnChanges() {
    this.logger.info('OnChanges');
  }

  ngDoCheck() {
    this.logger.info('DoCheck');
  }

  ngAfterContentInit() {
    this.logger.info('AfterContentInit')
  }
}
