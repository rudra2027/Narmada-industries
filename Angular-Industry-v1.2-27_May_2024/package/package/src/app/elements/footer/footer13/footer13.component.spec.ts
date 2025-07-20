import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer13Component } from './footer13.component';

describe('Footer13Component', () => {
  let component: Footer13Component;
  let fixture: ComponentFixture<Footer13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Footer13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
