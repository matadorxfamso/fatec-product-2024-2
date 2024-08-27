import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
   {
     "id":1,
     "name":"the last of us",
     "price": 250,
     "category":"Sobrevivencia"
   },
   {
    "id":1,
    "name":"silent hill 2",
    "price": 250,
    "category":"Terror"
  },  {
    "id":1,
    "name":"The Crew 2",
    "price": 199,
    "category":"Ação"
  }
  ]
}
