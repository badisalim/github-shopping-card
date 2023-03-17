import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../invoice-container/invoice-container.component';
// import { ProductsService } from '../shopping-card/invoice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})


export class InvoiceFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  form: any;
  formGroup: FormGroup;
  routerNavigateByUrl: any;
  productsService: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: [''],
      quantity: [],
      price: [],


    });
    this.formGroup.patchValue(this.product);
  }
  
  async submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.save.emit(this.formGroup.value);
      await this.productsService.addItem(this.formGroup.value).toPromise();
      
      this.router.navigateByUrl('/products');

    }
  }

}

// export class ProductFormComponent implements OnInit {
//   @Input() product: Product;
//   @Output() save = new EventEmitter<Product>();
//   formGroup: FormGroup;
//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.formGroup = this.formBuilder.group({
//       id: [''],
//       name: [''],
//       code: [''],
//       price: []
//     });
//     this.formGroup.patchValue(this.product);
//   }

//   async submit() {
//     if (this.formGroup.valid) {
//       this.save.emit(this.formGroup.value);
//     }
//   }
// }
