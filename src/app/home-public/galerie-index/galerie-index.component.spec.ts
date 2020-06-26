import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieIndexComponent } from './galerie-index.component';

describe('GalerieIndexComponent', () => {
  let component: GalerieIndexComponent;
  let fixture: ComponentFixture<GalerieIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
