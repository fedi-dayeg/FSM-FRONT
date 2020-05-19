import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationDetailIndexComponent } from './manifestation-detail-index.component';

describe('ManifestationDetailIndexComponent', () => {
  let component: ManifestationDetailIndexComponent;
  let fixture: ComponentFixture<ManifestationDetailIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationDetailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationDetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
