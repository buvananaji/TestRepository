import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionappComponent } from './functionapp.component';

describe('FunctionappComponent', () => {
  let component: FunctionappComponent;
  let fixture: ComponentFixture<FunctionappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
