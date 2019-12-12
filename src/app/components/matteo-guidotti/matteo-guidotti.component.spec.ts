import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatteoGuidottiComponent } from './matteo-guidotti.component';

describe('MatteoGuidottiComponent', () => {
  let component: MatteoGuidottiComponent;
  let fixture: ComponentFixture<MatteoGuidottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatteoGuidottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatteoGuidottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
