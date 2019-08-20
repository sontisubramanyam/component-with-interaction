import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparent1Component } from './sparent1.component';

describe('Sparent1Component', () => {
  let component: Sparent1Component;
  let fixture: ComponentFixture<Sparent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sparent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sparent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
