import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperAdminHomeDachboardComponent } from './sper-admin-home-dachboard.component';

describe('SperAdminHomeDachboardComponent', () => {
  let component: SperAdminHomeDachboardComponent;
  let fixture: ComponentFixture<SperAdminHomeDachboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperAdminHomeDachboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperAdminHomeDachboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
