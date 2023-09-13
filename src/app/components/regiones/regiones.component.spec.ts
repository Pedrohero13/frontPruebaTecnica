import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionesComponent } from './regiones.component';

describe('RegionesComponent', () => {
  let component: RegionesComponent;
  let fixture: ComponentFixture<RegionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionesComponent]
    });
    fixture = TestBed.createComponent(RegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
