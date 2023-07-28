import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { ProductDetails } from '../../models/product_details';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  data!: ProductDetails;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getProductById();
  }

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getProductById() {
    this.isLoading = true;
    this.service.getProductById(this.id).subscribe(
      (res:any) => {
        this.isLoading = false;
        this.data = res;
      },
      (error) => {
        this.isLoading = false;
        alert(error);
      }
    );
  }
}
