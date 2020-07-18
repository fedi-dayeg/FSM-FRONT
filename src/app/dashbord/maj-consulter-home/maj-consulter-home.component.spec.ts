import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajConsulterHomeComponent } from './maj-consulter-home.component';

describe('MajConsulterHomeComponent', () => {
  let component: MajConsulterHomeComponent;
  let fixture: ComponentFixture<MajConsulterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajConsulterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajConsulterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
