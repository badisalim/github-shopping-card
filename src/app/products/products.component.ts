import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../invoice-container/invoice-container.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  constructor() {}

  ngOnInit() {
  }

}
