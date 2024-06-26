import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsAppComponent } from './cms-app.component';

describe('CmsAppComponent', () => {
  let component: CmsAppComponent;
  let fixture: ComponentFixture<CmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
