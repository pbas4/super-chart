import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(
        item => {
          this.productList = [];
          item.forEach(el => {
            const p = el.payload.toJSON();
            p['$key'] = el.key;
            this.productList.push(p as Product);
          });
        }
      );
  }

  onEdit(p: Product) {
    this.productService.selectedProduct = Object.assign({}, p);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct($key);
      this.toastr.success('Successfull operation', 'Product deleted');
    }
  }

}
