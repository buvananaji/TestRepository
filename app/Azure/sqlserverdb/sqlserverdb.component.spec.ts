import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlserverdbComponent } from './sqlserverdb.component';

describe('SqlserverdbComponent', () => {
  let component: SqlserverdbComponent;
  let fixture: ComponentFixture<SqlserverdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlserverdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlserverdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
