import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer12Component } from './footer12.component';

describe('Footer12Component', () => {
  let component: Footer12Component;
  let fixture: ComponentFixture<Footer12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Footer12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
