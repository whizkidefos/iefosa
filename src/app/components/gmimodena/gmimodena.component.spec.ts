import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmimodenaComponent } from './gmimodena.component';

describe('GmimodenaComponent', () => {
  let component: GmimodenaComponent;
  let fixture: ComponentFixture<GmimodenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmimodenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmimodenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
