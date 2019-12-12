import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenidaComponent } from './avenida.component';

describe('AvenidaComponent', () => {
  let component: AvenidaComponent;
  let fixture: ComponentFixture<AvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
