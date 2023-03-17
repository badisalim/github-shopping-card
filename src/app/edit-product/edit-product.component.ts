import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../invoice-container/invoice-container.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product$: Observable<Product>;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.product$ = this.httpClient.get<Product>(`https://my-json-server.typicode.com/badisalim/shopping-card/products/${id}`);
  }

  async submit(product) {}

  async remove(product) {
    await this.httpClient.delete(`https://my-json-server.typicode.com/badisalim/shopping-card/products/${product.id}`).toPromise();
    this.router.navigateByUrl('/products');
  }
}
