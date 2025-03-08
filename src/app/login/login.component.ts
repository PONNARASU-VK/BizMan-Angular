import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Add this line
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; // Add this

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Add this if using standalone components
  imports: [ CommonModule,MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule] // Add this
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      // Mark all fields as touched to trigger error messages
      this.loginForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}