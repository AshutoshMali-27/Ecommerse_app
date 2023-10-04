import { Router } from '@angular/router';
import { Directive, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appOpenProductDetails]'
})
export class DirectiveProductDirective {
@Input() productId: number =0;
@HostListener('click') openProductDetails(){
  window.scrollTo(0, 0);
  this.router.navigate(['/product-details'],{
    queryParams:{
      id:this.productId,
    },
  });
}

  constructor(private router: Router) { }

}
