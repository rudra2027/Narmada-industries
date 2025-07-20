import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer12',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './footer12.component.html',
  styleUrl: './footer12.component.css'
})
export class Footer12Component {
  email1 = 'info@example.com';
  email2 = 'company@example.com';
  subscribeForm: FormGroup;
  message: string | undefined;
  success: boolean | undefined;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.value.email;
      this.success = true;
      this.message = 'You have successfully subscribed.';
    } else {
      this.message = 'Please enter a valid email address.';
      this.success = false;
    }
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
}
