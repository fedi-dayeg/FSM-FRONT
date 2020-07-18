import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdateAdminComponent } from './apdate-admin.component';

describe('ApdateAdminComponent', () => {
  let component: ApdateAdminComponent;
  let fixture: ComponentFixture<ApdateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApdateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
