import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../invoice-container/invoice-container.component';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: [''],
      quantity: [],
      price: []
    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      this.save.emit(this.formGroup.value);
    }
  }
}
