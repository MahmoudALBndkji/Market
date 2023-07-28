import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor() {}
  @Input() data!: Product;
  @Output() item = new EventEmitter();

  isAddButton: boolean = false;
  amount: number = 0;

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
