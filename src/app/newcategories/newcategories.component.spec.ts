import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcategoriesComponent } from './newcategories.component';

describe('NewcategoriesComponent', () => {
  let component: NewcategoriesComponent;
  let fixture: ComponentFixture<NewcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
