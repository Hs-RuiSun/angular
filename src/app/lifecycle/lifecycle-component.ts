import { Component, Input, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-lifecycle',
  providers: [LoggerService],
  templateUrl: './lifecycle-component.html'
})
export class LifeCycleComponent implements OnInit {
  @Input()
  message = 'default';

  constructor(private logger: LoggerService) {}
 
  ngOnChanges(changes: SimpleChanges) {
    this.logger.info('OnChanges');
  }
   
  ngOnInit() {
    this.logger.info('OnInit');
  }

  ngDoCheck() {
    this.logger.info('DoCheck');
  }

  ngAfterContentInit() {
    this.logger.info('AfterContentInit')
  }
  
  ngAfterContentChecked() {
  this.logger.info('ngAfterContentChecked')
  }
  
  ngAfterViewInit() {
    this.logger.info('ngAfterViewInit')
  }
  
  ngAfterViewChecked() {
    this.logger.info('ngAfterViewChecked')
  }
  
  ngOnDestroy() {
    this.logger.info('ngOnDestroy')
  } 
}
