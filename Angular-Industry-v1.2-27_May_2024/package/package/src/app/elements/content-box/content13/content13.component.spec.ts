import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content13Component } from './content13.component';

describe('Content13Component', () => {
  let component: Content13Component;
  let fixture: ComponentFixture<Content13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Content13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
