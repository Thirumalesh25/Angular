import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class Cart {
  items: Product[] = [];

  addItem(item: Product) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(item: Product) {
    const idx = this.items.indexOf(item);
    if (idx !== -1) {
      this.items.splice(idx, 1);
    }
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
