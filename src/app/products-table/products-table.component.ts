import { Component, OnInit } from '@angular/core';
import { Product} from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit{
  products: Product[] = [];

  constructor(private service: ProductService){}
  ngOnInit() {
this.loadproducts();
  }

  loadproducts() {
   this.service.getProducts().subscribe({
      next: data =>this.products = data
   }
   );
  }



}
