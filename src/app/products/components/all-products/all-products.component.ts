import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  ngOnInit(): void {
    this.getProducts();
  }
  constructor(private service: ProductsService) {}
  getProducts() {
    this.service.getAllProduct().subscribe((res: any) => {
      this.products = res;
    });
  }
}
