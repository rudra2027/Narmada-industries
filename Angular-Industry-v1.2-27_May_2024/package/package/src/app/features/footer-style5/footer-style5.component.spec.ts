import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle5Component } from './footer-style5.component';

describe('FooterStyle5Component', () => {
  let component: FooterStyle5Component;
  let fixture: ComponentFixture<FooterStyle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterStyle5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterStyle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
