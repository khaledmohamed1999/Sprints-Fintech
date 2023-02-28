import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './confirm_password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private router:Router, private http: HttpClient) {
    this.registerForm = new FormGroup({
      firstName:new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, [Validation.match('password', 'confirmPassword')]);
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.http.post('http://localhost:8009/api/userCreate', this.registerForm.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
        this.router.navigate(['\sign_in'])
      })
    }
  }
}
