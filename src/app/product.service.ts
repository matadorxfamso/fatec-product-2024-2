import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getProductsByid(id:number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  delete(Product: Product): Observable<void> {
    return this.http.delete<void>(
      'http://localhost:3000/products/' + Product.id
    );
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(
      'http://localhost:3000/products/' + product.id,
      product);
  }
}
