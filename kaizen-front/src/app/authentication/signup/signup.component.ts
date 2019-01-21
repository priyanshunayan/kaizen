import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
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
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: [''],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}
  ngOnInit() {
  }
  registerUsers() {
    console.warn(this.profileForm.value);
    this.authService.registerUsers(this.profileForm.value).subscribe(res => {
      console.log(`Users Registered with Value ${this.profileForm.value}`, res);
      const token = res;
      localStorage.setItem('Kaizen', JSON.stringify(token));
      this.authService.getToken();
      this.router.navigate(['/books']);
    });
  }
}
