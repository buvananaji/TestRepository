import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragebucketComponent } from './storagebucket.component';

describe('StoragebucketComponent', () => {
  let component: StoragebucketComponent;
  let fixture: ComponentFixture<StoragebucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragebucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragebucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
