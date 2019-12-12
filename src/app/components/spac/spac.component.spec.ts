import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacComponent } from './spac.component';

describe('SpacComponent', () => {
  let component: SpacComponent;
  let fixture: ComponentFixture<SpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
