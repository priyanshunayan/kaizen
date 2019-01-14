import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
/*   profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  }); */
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    username: ['', Validators.required],
    email: [''],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
  }

}
