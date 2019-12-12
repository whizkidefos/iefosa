import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlberiComponent } from './alberi.component';

describe('AlberiComponent', () => {
  let component: AlberiComponent;
  let fixture: ComponentFixture<AlberiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlberiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
