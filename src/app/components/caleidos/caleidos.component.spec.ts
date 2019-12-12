import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaleidosComponent } from './caleidos.component';

describe('CaleidosComponent', () => {
  let component: CaleidosComponent;
  let fixture: ComponentFixture<CaleidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaleidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaleidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
