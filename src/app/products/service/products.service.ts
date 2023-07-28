import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${environment.baseApi}products`);
  }

  getProductById(id: any) {
    return this.http.get(`${environment.baseApi}products/${id}`);
  }

  getAllCategories() {
    return this.http.get(`${environment.baseApi}products/categories`);
  }

  getProuctsByCategory(category: string) {
    return this.http.get(`${environment.baseApi}products/category/${category}`);
  }
}
