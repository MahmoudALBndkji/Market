import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  isLoading: boolean = false;
  cartProducts: any[] = [];
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  constructor(private service: ProductsService) {}

  getProducts() {
    this.isLoading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  getCategories() {
    this.isLoading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  filterCategory(event: any) {
    let category = event.target.value;
    category == 'all' ? this.getProducts() : this.getProductsCategory(category);
  }

  getProductsCategory(category: string) {
    this.isLoading = true;
    this.service.getProuctsByCategory(category).subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (exist) alert('Product is Already in your Cart');
      else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
