import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationsCardComponent } from './manifestations-card.component';

describe('ManifestationsCardComponent', () => {
  let component: ManifestationsCardComponent;
  let fixture: ComponentFixture<ManifestationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
