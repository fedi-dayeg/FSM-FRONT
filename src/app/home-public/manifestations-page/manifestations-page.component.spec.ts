import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationsPageComponent } from './manifestations-page.component';

describe('ManifestationsPageComponent', () => {
  let component: ManifestationsPageComponent;
  let fixture: ComponentFixture<ManifestationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
