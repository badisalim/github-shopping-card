import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [

    ShopComponent,
    ProductsComponent,
    InvoiceContainerComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [

          {
            path: 'add-product',
            component: AddProductComponent
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent
          },

          {
            path: 'products',
            component: InvoiceContainerComponent
          }
        ]
      }
    ])
  ]
})
export class ShopModule { }
