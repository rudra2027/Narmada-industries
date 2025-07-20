import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDark2Component } from './header-dark2.component';

describe('HeaderDark2Component', () => {
  let component: HeaderDark2Component;
  let fixture: ComponentFixture<HeaderDark2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDark2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDark2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
