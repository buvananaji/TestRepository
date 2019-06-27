import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralstorageComponent } from './generalstorage.component';

describe('GeneralstorageComponent', () => {
  let component: GeneralstorageComponent;
  let fixture: ComponentFixture<GeneralstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
