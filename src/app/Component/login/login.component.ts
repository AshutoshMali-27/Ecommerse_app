import { UtilityservicesService } from './../../services/utilityservices.service';
import { NavigationService } from 'src/app/services/navigation.service';
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
  message="";
  constructor(private fb:FormBuilder, 
    private NavigationService:NavigationService,
    private UtilityservicesService:UtilityservicesService
    ) {}

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
login(){
  this.NavigationService.loginuser(this.Email.value,this.Password.value).subscribe((res:any)=>{

    if(res.toString() !== 'invalid'){
      this.message ='Logged in Successfully';
     this.UtilityservicesService.setUser(res.toString());
    }
    else{
      this.message='Invalid Credentials!';
    }
  });
}

get Email(): FormControl{
  return this.loginFrom.get('email') as FormControl
}

get Password(): FormControl{
  return this.loginFrom.get('pwd') as FormControl
}

  

}
