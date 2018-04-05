import { Injectable } from "@angular/core";


@Injectable()
export class LoggerService {
  infos: string[] = [];
  count: number;

  info(msg: string) {
    this.infos.push(msg);
  }

  clear() {
    this.infos = [];
  }
}
