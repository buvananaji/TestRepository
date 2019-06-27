import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppengineComponent } from './appengine.component';

describe('AppengineComponent', () => {
  let component: AppengineComponent;
  let fixture: ComponentFixture<AppengineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppengineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
