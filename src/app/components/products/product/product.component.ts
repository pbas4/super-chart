import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
      this.toastr.success('Created', 'Product created correctly');
    } else {
      this.productService.updateProduct(productForm.value);
      this.toastr.info('Created', 'Product updated correctly');
    }

    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if (productForm !== null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }

}
