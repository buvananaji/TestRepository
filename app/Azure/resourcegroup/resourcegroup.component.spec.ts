import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcegroupComponent } from './resourcegroup.component';

describe('ResourcegroupComponent', () => {
  let component: ResourcegroupComponent;
  let fixture: ComponentFixture<ResourcegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
