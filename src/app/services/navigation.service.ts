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

  getCategoryList(){
    return this.http.get(this.baseUrl + 'GetCategoryList');
  }

  // getCategoryList() {
  //   let url = this.baseUrl + 'GetCategoryList';
  //   return this.http.get<any[]>(url).pipe(
  //     map((categories) =>
  //       categories.map((category) => {
  //         let mappedCategory: Category = {
  //           id: category.id,
  //           Category: category.Category,
  //           subCategory: category.SubCategory,
  //         };
  //         return mappedCategory;
  //       })
  //     )
  //   );
  // }
}

