import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark4Component } from './header-style-dark4.component';

describe('HeaderStyleDark4Component', () => {
  let component: HeaderStyleDark4Component;
  let fixture: ComponentFixture<HeaderStyleDark4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderStyleDark4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderStyleDark4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
