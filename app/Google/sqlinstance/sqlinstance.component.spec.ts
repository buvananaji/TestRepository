import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlinstanceComponent } from './sqlinstance.component';

describe('SqlinstanceComponent', () => {
  let component: SqlinstanceComponent;
  let fixture: ComponentFixture<SqlinstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlinstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
