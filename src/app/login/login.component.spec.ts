import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule,RouterTestingModule],
    
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing title',()=>{
    expect(component.componentName).toBe("login")
  })
  it('[Email check]- should check user email is invalid',()=>{
    let email=component.loginFormGroup.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.error['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors('email')).toBeTruthy();
  })
  it('[email-check]- It should check user email address is entered is correct',()=>{
    let email= component.loginFormGroup.controls['email']
    email.setValue('abc@gmail.com')
    expect(email.errors).toBeNull();
  })
});
