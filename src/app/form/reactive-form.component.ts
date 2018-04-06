import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
//  heroForm = new FormGroup({
//    name: new FormControl()
//  });
  
  heroForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
}