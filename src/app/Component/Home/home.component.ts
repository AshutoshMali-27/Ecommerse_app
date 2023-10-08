import { SuggestedProduct } from './../../Models/models';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      Category: {
        id: 0,
        Category: 'electronics',
        subCategory: 'mobiles',
      },
    },
    {
      banerimage: 'Baner/Baner_Laptop.png',
      Category: {
        id: 1,
        Category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.png',
      Category: {
        id: 1,
        Category: 'furniture',
        subCategory: 'chairs',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}