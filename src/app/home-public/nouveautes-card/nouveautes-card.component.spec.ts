import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveautesCardComponent } from './nouveautes-card.component';

describe('NouveautesCardComponent', () => {
  let component: NouveautesCardComponent;
  let fixture: ComponentFixture<NouveautesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveautesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveautesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
