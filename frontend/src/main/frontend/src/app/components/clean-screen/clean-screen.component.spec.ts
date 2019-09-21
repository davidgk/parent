import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanScreenComponent } from './clean-screen.component';

describe('CleanScreenComponent', () => {
  let component: CleanScreenComponent;
  let fixture: ComponentFixture<CleanScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
