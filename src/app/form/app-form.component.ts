import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { User } from "../user.model";

@Component({
  selector: 'app-hero-form',
  providers: [LoggerService],
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  Category = [{ id: 1, name: 'primary' },
  { id: 2, name: 'middle' },
  { id: 3, name: 'high' }];
  nationalities: string[] = ['Canada', 'China', 'India'];
  users: User[] = [];
  user: User = new User('', '', '', 2);
  
  constructor(private logger: LoggerService) { }

  onSubmit() {
    this.users.push(this.user);
    this.logger.info(this.user.username);
  }
}
