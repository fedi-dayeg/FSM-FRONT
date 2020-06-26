import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteConsulterHomeComponent } from './actualite-consulter-home.component';

describe('ActualiteConsulterHomeComponent', () => {
  let component: ActualiteConsulterHomeComponent;
  let fixture: ComponentFixture<ActualiteConsulterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteConsulterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteConsulterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
