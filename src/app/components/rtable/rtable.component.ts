import { ProductService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'r-table',
  templateUrl: './rtable.component.html',
  styleUrls: ['./rtable.component.scss'],
})
export class RTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
