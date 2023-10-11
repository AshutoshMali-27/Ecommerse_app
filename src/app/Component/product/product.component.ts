import { UtilityservicesService } from './../../services/utilityservices.service';
import { Product,Category } from './../../Models/models';
import { Component ,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' | 'currentcartitem' | 'prevcartitem' = 'grid';
  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    productCategory: {
      id: 1,
      category: '',
      subcategory: '',
    },
    offer: {
      id: 1,
      title: '',
      discount: 0,
    },
    imageName: '',
  }; 
  constructor(public UtilityservicesService : UtilityservicesService ){}

  ngOnInit(): void {
      
  }
}
