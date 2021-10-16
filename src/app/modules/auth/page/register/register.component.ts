import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  selected = 'option2';
  post: any = '';

  constructor(private formBuilder: FormBuilder,private registerService: RegisterService,private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'username': [null, Validators.required],
      'password': [null, [Validators.required]],
      'address': [null, [Validators.required]],
      'fullname': [null, [Validators.required]],
      'phonenumber': [null, [Validators.required]],
      'gender': [null, [Validators.required]],
      'dob': [null]
    });
  }

  // onSubmit() {
  //   var formData: any = new FormData();
  //   formData.append("userName", this.formGroup.get('username').value);
  //   formData.append("password", this.formGroup.get('password').value);
  //   formData.append("email", this.formGroup.get('email').value);
  //   formData.append("address", this.formGroup.get('address').value);
  //   formData.append("fullName", this.formGroup.get('fullname').value);
  //   formData.append("phone", this.formGroup.get('phonenumber').value);
  //   formData.append("gender", this.formGroup.get('gender').value);
  //   formData.append("dob", this.formGroup.get('dob').value);

  //   this.http.post('http://old-stuff-exchange-api.herokuapp.com/api/users/register' ,formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }

  onSubmit() {
    const body = { 
       userName: this.formGroup.get('username').value,
       password: this.formGroup.get('password').value ,
       email: this.formGroup.get('email').value ,
       address: this.formGroup.get('address').value ,
       fullName: this.formGroup.get('fullname').value ,
       phone: this.formGroup.get('phonenumber').value ,
       gender: this.formGroup.get('gender').value ,
       dob: this.formGroup.get('dob').value ,
      };
    this.http.post<any>('http://old-stuff-exchange-api.herokuapp.com/api/users/register', body).subscribe(data => {
        console.log("data", data)
    });
  }


}
