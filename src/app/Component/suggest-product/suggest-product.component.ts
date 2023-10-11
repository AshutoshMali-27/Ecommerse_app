import { NavigationService } from './../../services/navigation.service';

import { Component, Input, OnInit } from '@angular/core';
import { Category,Product  } from '../../Models/models';


@Component({
  selector: 'app-suggest-product',
  templateUrl: './suggest-product.component.html',
  styleUrls: ['./suggest-product.component.css']
})
export class SuggestProductComponent  implements OnInit  {

  @Input() category: Category = {
    id: 0,
    category: '',
    subcategory: '',
  };
  @Input() count: number = 3;
  products: Product[] = [] ;
  constructor(private NavigationService :NavigationService){}

  
ngOnInit(): void {
    this.NavigationService.GetProducts(
      this.category.category,
      this.category.subcategory,
      this.count
    )

    .subscribe((res:any []) =>{
      console.log(res)
      for(let product of res){
        this.products.push(product)

         console.log(product)
         console.log(this.category.subcategory)
      }
    })
}

}
