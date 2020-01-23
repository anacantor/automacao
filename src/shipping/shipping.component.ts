
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
[
  {
    "type": "ML2RC2",
    "price": 20
  },
  {
    "type": "ML1RC2",
    "price": 9.99
  },
  {
    "type": "MQ2RC2",
    "price": 2.99
  }
]
"NESTA ADD CONSULTAR API DO PREÇOS"

export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }