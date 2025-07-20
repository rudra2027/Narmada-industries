import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageSidebarLeftComponent } from './large-image-sidebar-left.component';

describe('LargeImageSidebarLeftComponent', () => {
  let component: LargeImageSidebarLeftComponent;
  let fixture: ComponentFixture<LargeImageSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeImageSidebarLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeImageSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
