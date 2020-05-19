import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationDetailComponent } from './manifestation-detail.component';

describe('ManifestationDetailComponent', () => {
  let component: ManifestationDetailComponent;
  let fixture: ComponentFixture<ManifestationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
