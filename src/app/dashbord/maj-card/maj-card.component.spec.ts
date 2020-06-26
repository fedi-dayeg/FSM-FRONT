import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajCardComponent } from './maj-card.component';

describe('MajCardComponent', () => {
  let component: MajCardComponent;
  let fixture: ComponentFixture<MajCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
