import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NavigationItem } from './../../Models/models';
import { Component, ElementRef, OnInit,Type,ViewChild,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modelTitle !: ElementRef;
  @ViewChild('container' ,{read: ViewContainerRef ,static:true})
  container !:ViewContainerRef
navigationList : NavigationItem[]=[


  {
    category :'electronics',
    subcategories : ['mobiles','laptops']
  },
  {
    category :'furniture',
    subcategories : ['chairs','tables']
  }
  
];


  constructor(){}

  ngOnInit(): void { }

  openModal(name: string){
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
