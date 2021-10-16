import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private registerService: RegisterService, private http: HttpClient) { }

  ngOnInit(): void {
     this.createForm()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, [Validators.required]],
    });
  }

  onSubmit() {
    const body = { 
      userName: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value ,
     };
     const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
   this.http.post<any>('http://old-stuff-exchange-api.herokuapp.com/api/users/login', body).subscribe(data => {
       console.log("data", data)
   });
  }

}
