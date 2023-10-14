import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/models';
@Injectable({
  providedIn: 'root'
})
export class UtilityservicesService {

  constructor(private jwt: JwtHelperService) { }

  applyDiscount(price:number ,discount:number): number{
    let finalPrice: number =price =price *(discount /100);
    return finalPrice
  }



  getUser(): User {

    let token =this.jwt.decodeToken();
    let user: User ={
      id:token.id,
      firstName:token.firstName,
      lastName :  token.lastName,
      address:token.address,
      mobile:token.mobile,
      email:token.email,
      password:'',
      createdAt:token.createdat,
      modifiedAt:token.modifiedat,

    };
    return user;
  }




  setUser(token: string) {
    localStorage.setItem('user', token);
  }


  isLoggedIn(){
    return localStorage.getItem('user') ? true :false;

  }

  logoutUser(){

    localStorage.removeItem('user');
  }
}
