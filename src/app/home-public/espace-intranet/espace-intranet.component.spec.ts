import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceIntranetComponent } from './espace-intranet.component';

describe('EspaceIntranetComponent', () => {
  let component: EspaceIntranetComponent;
  let fixture: ComponentFixture<EspaceIntranetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceIntranetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceIntranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
