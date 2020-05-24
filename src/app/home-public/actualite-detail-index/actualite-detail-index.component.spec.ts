import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteDetailIndexComponent } from './actualite-detail-index.component';

describe('ActualiteDetailIndexComponent', () => {
  let component: ActualiteDetailIndexComponent;
  let fixture: ComponentFixture<ActualiteDetailIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteDetailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteDetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
