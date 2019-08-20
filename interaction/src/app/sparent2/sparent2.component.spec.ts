import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparent2Component } from './sparent2.component';

describe('Sparent2Component', () => {
  let component: Sparent2Component;
  let fixture: ComponentFixture<Sparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
