import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpagesComponent } from './newpages.component';

describe('NewpagesComponent', () => {
  let component: NewpagesComponent;
  let fixture: ComponentFixture<NewpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
