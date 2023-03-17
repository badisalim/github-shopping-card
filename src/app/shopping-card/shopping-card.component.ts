import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../invoice-container/invoice-container.component';
import { Router } from '@angular/router';
import { ProductsService } from './invoice.service';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})

export class ShoppingCardComponent implements OnInit {
  HttpClient: any;
  data: any;

  constructor(private httpClient: HttpClient, private productService: ProductsService, private router: Router) { }


  ngOnInit() {
    this.httpClient.get('https://my-json-server.typicode.com/badisalim/shopping-card/products')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  addItem() {

    this.data.push({ name: '', quantity: 1, price: 1 });
    // CALL SERVICE
    this.productService.addItem({ name: '', quantity: 1, price: 1 });
  }
  async submit(product: Product) {
    await this.httpClient.post('http://localhost:3000/https://my-json-server.typicode.com/badisalim/shopping-card/productsproducts', product).toPromise();
    this.router.navigateByUrl('products');
  }



  total() {
    const productsTotal = this.data.map(product => product.quantity * product.price);
    return (this.data.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
  }

  removeItem(id) {
    console.log(this.data[id]);
    this.data.splice(id, 1);
  }

}




// // export class ShoppingCartComponent implements OnInit {
// //   invoice = [{
// //     name: 'Apple',
// //     quantity: 3,
// //     price: 1.10
// //   },
// //   {
// //     name: 'Orange',
// //     quantity: 2,
// //     price: 1.99
// //   },
// //   {
// //     name: 'Melon',
// //     quantity: 1,
// //     price: 3.22
// //   }
// //   ];

// //   constructor() { }

// //   ngOnInit() {

// //   }

// //   addItem() {
// //     this.invoice.push({ name: '', quantity: 1, price: 1 });
// //   }

// //   total() {
// //     const productsTotal = this.invoice.map(product => product.quantity * product.price);
// //     return (this.invoice.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
// //   }

// //   removeItem(id) {
// //     console.log(this.invoice[id]);
// //     this.invoice.splice(id, 1);
// //   }

// // }



