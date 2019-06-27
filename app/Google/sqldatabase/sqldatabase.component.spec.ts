import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqldatabaseComponent } from './sqldatabase.component';

describe('SqldatabaseComponent', () => {
  let component: SqldatabaseComponent;
  let fixture: ComponentFixture<SqldatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqldatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
