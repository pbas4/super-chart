import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.productList = this.db.list('products');
  }

  insertProduct(p: Product) {
    this.productList.push({
      name: p.name,
      category: p.category,
      location: p.location,
      price: p.price
    });
  }

  updateProduct(p: Product) {
    this.productList.update(p.$key, {
      name: p.name,
      category: p.category,
      location: p.location,
      price: p.price
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
