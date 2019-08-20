import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentvComponent } from './parentv.component';

describe('ParentvComponent', () => {
  let component: ParentvComponent;
  let fixture: ComponentFixture<ParentvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
