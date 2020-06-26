import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostInformationsComponent } from './card-post-informations.component';

describe('CardPostInformationsComponent', () => {
  let component: CardPostInformationsComponent;
  let fixture: ComponentFixture<CardPostInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPostInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
