import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    email: [''],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
