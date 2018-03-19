import { Config } from './config.model';
import { ConfigService } from './config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit{
  constructor(private configService: ConfigService) {}
  config: Config;
  error: string;

  ngOnInit() {
  this.showConfig();
  }
  showConfig(): void {
  this.configService.getConfig()
    .subscribe(data => this.config = {
    heroesUrl: data['heroesUrl'],
    textfile:  data['textfile']
},
    error => this.error = error);
  }

}
