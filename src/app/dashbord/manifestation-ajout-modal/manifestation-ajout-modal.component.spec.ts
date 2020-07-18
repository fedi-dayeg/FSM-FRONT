import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationAjoutModalComponent } from './manifestation-ajout-modal.component';

describe('ManifestationAjoutModalComponent', () => {
  let component: ManifestationAjoutModalComponent;
  let fixture: ComponentFixture<ManifestationAjoutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationAjoutModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationAjoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
