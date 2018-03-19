import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'app/http/config.json';

  getConfig() {
    return this.http.get(this.url);
  }
}
