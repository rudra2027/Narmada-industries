import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconBox1Component } from '../../icon-box/icon-box1/icon-box1.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer13',
  standalone: true,
  imports: [
    RouterLink,
    IconBox1Component,
    NgClass,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './footer13.component.html',
  styleUrl: './footer13.component.css'
})
export class Footer13Component {

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
