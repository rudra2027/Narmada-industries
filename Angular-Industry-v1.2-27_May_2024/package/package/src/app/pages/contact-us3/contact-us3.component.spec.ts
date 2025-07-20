import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs3Component } from './contact-us3.component';

describe('ContactUs3Component', () => {
  let component: ContactUs3Component;
  let fixture: ComponentFixture<ContactUs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
