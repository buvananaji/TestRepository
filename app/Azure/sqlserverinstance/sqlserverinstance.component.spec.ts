import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlserverinstanceComponent } from './sqlserverinstance.component';

describe('SqlserverinstanceComponent', () => {
  let component: SqlserverinstanceComponent;
  let fixture: ComponentFixture<SqlserverinstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlserverinstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlserverinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
