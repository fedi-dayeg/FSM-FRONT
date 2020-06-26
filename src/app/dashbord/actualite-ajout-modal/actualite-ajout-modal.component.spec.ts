import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteAjoutModalComponent } from './actualite-ajout-modal.component';

describe('ActualiteAjoutModalComponent', () => {
  let component: ActualiteAjoutModalComponent;
  let fixture: ComponentFixture<ActualiteAjoutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteAjoutModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteAjoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
