import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragecontainerComponent } from './storagecontainer.component';

describe('StoragecontainerComponent', () => {
  let component: StoragecontainerComponent;
  let fixture: ComponentFixture<StoragecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
