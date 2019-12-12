import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalkeroComponent } from './italkero.component';

describe('ItalkeroComponent', () => {
  let component: ItalkeroComponent;
  let fixture: ComponentFixture<ItalkeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalkeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalkeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
