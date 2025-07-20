import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForm1Component } from './search-form1.component';

describe('SearchForm1Component', () => {
  let component: SearchForm1Component;
  let fixture: ComponentFixture<SearchForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
