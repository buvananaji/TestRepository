import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiappComponent } from './apiapp.component';

describe('ApiappComponent', () => {
  let component: ApiappComponent;
  let fixture: ComponentFixture<ApiappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
