import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import {
  Category,
  Order,
  Payment,
  PaymentMethod,
  User,
} from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl ="https://localhost:44366/api/Shopping/";
  
  constructor(private http : HttpClient) { }

  // getCategoryList(){
  //   return this.http.get(this.baseUrl + 'GetCategoryList');
  // }

  getCategoryList() {
    let url = this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subcategory: category.subcategory,
          };
          console.log(category)
          return mappedCategory;
         
        })
      )  
    );
  }

  GetProducts(category:string ,subcategory:string ,count:number){

    return this.http.get<any[]>(this.baseUrl+'GetProducts',{
      params:new HttpParams()
      .set('category',category)
      .set('subcategory',subcategory)
      .set('count',count),

      
    }
    
    
    ); 
    console.log(category)
    
  }

  GetProduct(id:number){
    let url =this.baseUrl + "GetProduct/" +id;
    return this.http.get(url);
  }


  registerUser(user:User){
    let url =this.baseUrl + "RegisterUser";
    return this.http.post(url,user,{responseType:'text'});
  }


  loginuser(email:string ,password:string){
    
    let url =this.baseUrl + 'LoginUser';
    return this.http.post(url,{Email:email,Password:password},{responseType:'text'});
  }
}

