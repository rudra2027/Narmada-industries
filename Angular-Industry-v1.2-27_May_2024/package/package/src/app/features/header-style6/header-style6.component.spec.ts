import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyle6Component } from './header-style6.component';

describe('HeaderStyle6Component', () => {
  let component: HeaderStyle6Component;
  let fixture: ComponentFixture<HeaderStyle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderStyle6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderStyle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
