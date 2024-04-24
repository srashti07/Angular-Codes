import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private _snackBar: MatSnackBar, private userservice:UserService) { }

  ngOnInit(): void {
  }

  title:string = "Registration Form";
  passwordPattern:any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  registerForm = this.formbuilder.group({
    firstName:['', [Validators.required, Validators.minLength(2)]],
    lastName:[''],
    password:['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    confirmPassword:['',  [Validators.required, Validators.pattern(this.passwordPattern)]],
    gender:[''],
    age:[0, [Validators.min(18), this.ageValidator]],
    email:['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    phone:['', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
    address:this.formbuilder.group({
      street:[''],
      city:[''],
      state:[''],
      zipCode:['', [Validators.pattern(/^\d{5,6}$/)]]
    })
  }, { validators: this.passwordCheck })

  passwordCheck(ac: AbstractControl) {
    let pass = ac.get('password')?.value;
    let conpass = ac.get('confirmPassword')?.value;
  
    if (pass === conpass) {
      return null;
    } else {
      ac.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  ageValidator(control: AbstractControl): { [key: string]: any } | null {
    const age = control.value;
    if (age < 18) {
      return { invalidAge: true };
    }
    return null;
  }


  get firstName()
  {
    return this.registerForm.get("firstName");
  }
  get lastName()
  {
    return this.registerForm.get("lastName");
  }
  get password()
  {
    return this.registerForm.get("password");
  }
  get confirmPassword()
  {
    return this.registerForm.get("confirmPassword");
  }
  get gender()
  {
    return this.registerForm.get("gender");
  }
  get email()
  {
    return this.registerForm.get("email");
  }
  get phone()
  {
    return this.registerForm.get("phone");
  }
  get street()
  {
    return this.registerForm.get("address.street");
  }
  get city()
  {
    return this.registerForm.get("address.city");
  }
  get state()
  {
    return this.registerForm.get("address.state");
  }
  get zipCode()
  {
    return this.registerForm.get("address.zipCode");
  }

  // adduser()
  // {
  //   alert("user added");
  // }

  saveUser() {
    this.userservice.addUser(this.registerForm.value as User).subscribe(
      success => {
        this._snackBar.open('Congrats!! You have submitted the form!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      },
      failure => {
        alert(failure);
      }
    );
  }
  
}
