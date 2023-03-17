import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../invoice-container/invoice-container.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {}

  async submit(product: Product) {
    await this.httpClient.post('https://my-json-server.typicode.com/badisalim/shopping-card/products', product).toPromise();
    this.router.navigateByUrl('/products');
  }

}
