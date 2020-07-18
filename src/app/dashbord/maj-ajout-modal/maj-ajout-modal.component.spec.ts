import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajAjoutModalComponent } from './maj-ajout-modal.component';

describe('MajAjoutModalComponent', () => {
  let component: MajAjoutModalComponent;
  let fixture: ComponentFixture<MajAjoutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajAjoutModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajAjoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
