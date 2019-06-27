import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationinsightComponent } from './applicationinsight.component';

describe('ApplicationinsightComponent', () => {
  let component: ApplicationinsightComponent;
  let fixture: ComponentFixture<ApplicationinsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationinsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationinsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
