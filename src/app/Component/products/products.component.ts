import { Category ,Product} from './../../Models/models';
import { UtilityservicesService } from './../../services/utilityservices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';
  sortby: 'default' | 'htl' | 'lth' = 'default';
  products:Product[]=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private UtilityservicesService: UtilityservicesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let category = params.category;
      let subcategory = params.subcategory;

      if (category && subcategory)
        this.navigationService
          .GetProducts(category, subcategory, 10)
          .subscribe((res: any) => {
            this.products = res;
          });
    });
  }


  sortByPrice(sortKey:string){
    this.products.sort((a,b)=>{

      if(sortKey === 'default'){
        return a.id >b.id ?1 :-1;
      }
      if(sortKey === 'htl'){
        if((this.UtilityservicesService.applyDiscount(a.price,a.offer.discount))> (this.UtilityservicesService.applyDiscount(b.price,b.offer.discount))){

          return -1;
        }
        else{
          return 1;
        }

      }
      if(sortKey ==='lth'){
        if((this.UtilityservicesService.applyDiscount(a.price,a.offer.discount))> (this.UtilityservicesService.applyDiscount(b.price,b.offer.discount))){

          return 1;
        }
        else{
          return -1;
        }

      }
      return 0;
    })
  }
}
