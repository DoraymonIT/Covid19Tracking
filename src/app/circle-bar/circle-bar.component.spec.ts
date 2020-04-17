import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBarComponent } from './circle-bar.component';

describe('CircleBarComponent', () => {
  let component: CircleBarComponent;
  let fixture: ComponentFixture<CircleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
