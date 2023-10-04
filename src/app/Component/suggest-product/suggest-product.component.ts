
import { Component, Input, OnInit } from '@angular/core';
import { Category  } from '../../Models/models';


@Component({
  selector: 'app-suggest-product',
  templateUrl: './suggest-product.component.html',
  styleUrls: ['./suggest-product.component.css']
})
export class SuggestProductComponent  implements OnInit  {

  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: '',
  };
  @Input() count: number = 3;
  constructor(){}

  
ngOnInit(): void {
    
}

}
