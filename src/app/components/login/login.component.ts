import { Component,} from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.show());
      this.router.navigate(["/"]);
    }
  }
  show() {
    return this.loginForm.value;
  }
}
