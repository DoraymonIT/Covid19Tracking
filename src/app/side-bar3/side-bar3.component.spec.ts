import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBar3Component } from './side-bar3.component';

describe('SideBar3Component', () => {
  let component: SideBar3Component;
  let fixture: ComponentFixture<SideBar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
