import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieImageIndexComponent } from './galerie-image-index.component';

describe('GalerieImageIndexComponent', () => {
  let component: GalerieImageIndexComponent;
  let fixture: ComponentFixture<GalerieImageIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieImageIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieImageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
