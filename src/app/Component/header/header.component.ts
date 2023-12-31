import { NavigationService } from './../../services/navigation.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Category, NavigationItem } from './../../Models/models';
import {
  Component,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modelTitle!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  //list:any;


  navigationList: NavigationItem[] = [];


  constructor(private NavigationService: NavigationService) {}

  ngOnInit(): void {
    this.NavigationService.getCategoryList().subscribe((list: Category[] ) =>
    {
      console.log(list)
      for(let item of list){
      
        let present =false;
        for(let navItem of this.navigationList){
          if(navItem.category === item.category){
            navItem.subcategories.push(item.subcategory);
            present=true;
          }
        }
        if(!present){
          this.navigationList.push({
            category:item.category,
            subcategories:[item.subcategory],
          }); 
        } 
      }
    }
    ) 
  }

  openModal(name: string) {
    this.container.clear();

    let componentType!: Type<any>;
    if (name === 'login') {
      componentType = LoginComponent;
      this.modelTitle.nativeElement.textContent = 'Enter Login Information';
    }
    if (name === 'register') {
      componentType = RegisterComponent;
      this.modelTitle.nativeElement.textContent = 'Enter Register Information';
    }

    this.container.createComponent(componentType);
  }
}
