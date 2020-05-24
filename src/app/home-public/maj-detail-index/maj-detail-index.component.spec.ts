import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajDetailIndexComponent } from './maj-detail-index.component';

describe('MajDetailIndexComponent', () => {
  let component: MajDetailIndexComponent;
  let fixture: ComponentFixture<MajDetailIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajDetailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajDetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
