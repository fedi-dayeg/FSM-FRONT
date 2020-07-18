import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationConsulterHomeComponent } from './manifestation-consulter-home.component';

describe('ManifestationConsulterHomeComponent', () => {
  let component: ManifestationConsulterHomeComponent;
  let fixture: ComponentFixture<ManifestationConsulterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationConsulterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationConsulterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
