import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparentComponent } from './sparent.component';

describe('SparentComponent', () => {
  let component: SparentComponent;
  let fixture: ComponentFixture<SparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
