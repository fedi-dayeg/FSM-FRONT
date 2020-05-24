import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajDetailComponent } from './maj-detail.component';

describe('MajDetailComponent', () => {
  let component: MajDetailComponent;
  let fixture: ComponentFixture<MajDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
