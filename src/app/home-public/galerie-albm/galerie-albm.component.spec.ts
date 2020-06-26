import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieAlbmComponent } from './galerie-albm.component';

describe('GalerieAlbmComponent', () => {
  let component: GalerieAlbmComponent;
  let fixture: ComponentFixture<GalerieAlbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieAlbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieAlbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
