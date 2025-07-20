import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLight8Component } from './header-light8.component';

describe('HeaderLight8Component', () => {
  let component: HeaderLight8Component;
  let fixture: ComponentFixture<HeaderLight8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLight8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLight8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
