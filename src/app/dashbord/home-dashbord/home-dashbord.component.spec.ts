import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashbordComponent } from './home-dashbord.component';

describe('HomeDashbordComponent', () => {
  let component: HomeDashbordComponent;
  let fixture: ComponentFixture<HomeDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
