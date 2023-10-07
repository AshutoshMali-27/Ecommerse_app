import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
   ReactiveFormsModule
   , Validators
   ,FormControl
   
  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom!: FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
this.loginFrom =this.fb.group({
  email:['',[Validators.required,Validators.email]],
  pwd:[
    '',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ],
  ],
});
  }
login(){}

get Email(): FormControl{
  return this.loginFrom.get('email') as FormControl
}

get Password(): FormControl{
  return this.loginFrom.get('pwd') as FormControl
}

  

}
