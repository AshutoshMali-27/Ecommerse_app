import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityservicesService } from 'src/app/services/utilityservices.service';
import { Product } from 'src/app/Models/models';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{

imageIndex: number =1;
product !: Product;
reviewControl =new FormControl('');
showError =false;
reviewsave =false;

  constructor(

    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    public UtilityservicesService: UtilityservicesService
  ){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any)=>{
       let id = params.id;
       this.navigationService.GetProduct(id).subscribe((res:any)=>{
        this.product =res;
       });
    });
  }


  subnitReview(){
    let review =this.reviewControl.value;

    if(review === '' || review ===null){
      this.showError =true;
      return;
    }
    if(review !== '' || review !== null ){
      this.reviewsave=true;
      return;
    }
  }
}
