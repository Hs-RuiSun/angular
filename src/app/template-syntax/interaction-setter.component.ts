import { Component, Input } from "@angular/core";
@Component({
  selector: 'app-interaction-setter',
  template: `
  <div>
    <label>list</label> {{_name}}
  </div>
  `
})
export class InteractionSetterComponent {
  private _name: string;
  
  @Input("name")
  set name(name: string){
    this._name = name + " is here,";
  }
  get name(){
    return this._name;
  }
}