
import { Component, OnInit } from '@angular/core';



import { Component } from '@angular/core';

import { CartService } from {'../cart.service'} '@angular({common/http';

import{Component} from '@angular/clearCart';

 import {Component} from '@angular/formspacote';

 import { Component } from '@angular/core';

 import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})
export class CartcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


export class CartComponent {

constructor(
    private cartService: CartService
  ) { }
}

export class CartComponent {
  items;

  constructor(
    private cartService: CartService
  ) { }
}

export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
clearCart(metodo)

export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
export class cartcomponent {
  items;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
  }
}
export class cartcomponent {
  items;
  checkoutForm;
}
'esta opcion sujeta a modificacion ya que se debe verificar si la entrega no es receptiva por tienda'
export class cartcomponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
}
export class cartcomponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
export class cartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

