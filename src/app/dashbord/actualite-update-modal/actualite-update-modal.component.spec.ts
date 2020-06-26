import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteUpdateModalComponent } from './actualite-update-modal.component';

describe('ActualiteUpdateModalComponent', () => {
  let component: ActualiteUpdateModalComponent;
  let fixture: ComponentFixture<ActualiteUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
