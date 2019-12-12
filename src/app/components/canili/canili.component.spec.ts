import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaniliComponent } from './canili.component';

describe('CaniliComponent', () => {
  let component: CaniliComponent;
  let fixture: ComponentFixture<CaniliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaniliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaniliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
