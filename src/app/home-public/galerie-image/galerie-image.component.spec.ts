import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieImageComponent } from './galerie-image.component';

describe('GalerieImageComponent', () => {
  let component: GalerieImageComponent;
  let fixture: ComponentFixture<GalerieImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
