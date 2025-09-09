import { Component, signal } from '@angular/core';
import { Cart, Product } from './Services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp6');

  products = [
    { name: 'Smartphone', price: 500 },
    { name: 'Laptop', price: 1000 },
    { name: 'Smartwatch', price: 200 },
    { name: 'Headphones', price: 150 },
    { name: 'Camera', price: 700 }
  ];

  cart = new Cart;

  addToCart(item: any) {
    this.cart.addItem(item);
  }

  removeFromCart(item: Product) {
    this.cart.removeItem(item);
  }

  clearCart() {
    this.cart.clearCart();
  }
}
