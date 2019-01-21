import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router } from '@angular/router';
@Injectable()
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
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  loginUser() {
    this.authService.loginUsers(this.profileForm.value).subscribe(res => {
      console.log('You are logged in!', res);
      localStorage.setItem('Kaizen', JSON.stringify(res));
      this.router.navigate(['/books']);
    });
  }
}
