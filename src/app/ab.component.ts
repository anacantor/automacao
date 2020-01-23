
import { Component, Input } from '@angular/core';

import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab',
  template: `<h1>AB {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})


@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})


@Component({
  selector: 'empresav',
  template: `<h1>empresav {{empresav}}!,/h1>`;
  styles: [`h1 {front-family: Lato}`]
})

@Component({
  selector: 'cadastre-se',
  template:`<h1>cadastra-se {{cadastra-se}}!,</h1>`;
  styles: [`h1 {front-family: Lato;}`]
})

@Component({
  selector:'nameE',
  template: `<h1>nameE {{nameE}}!</h1>`,
  styles: [`h1 {front-family: Lato;}`]
})


@Component({
  selector: 'CNPJ',
  template: `<h1>cnpj {{cnpj}}!</h1>`,
  styles: [`h1 {front-family: Lato;}`]
})

@Component({
  selector: 'CPF',
  template: `<h1>cpf {{cpf}}!</h1>`,
  styles: [`h1 {front-family: Lato;}`]
})

@Component({
  selector: 'endereço',
  template: `<h1>endereço {{endereço}}!</h1>`,
  styles: [`h1 {front-family: Lato;`]
})

@Component({
  selector:'contatoP',
  template: `<h1>contatoP {{contgatoP}}!</h1>`,
  styles: [`h1 {front-family: Lato`]
})

@Component({
  selector: 'email',
  template: `<h1>email {{name}}!</h1>`,
  styles: [`h1 {front-family: Lato;}`]
})

@Component({
  selector: 'senha',
  template: `<h1>senha {{name}}!</h1>`,
  styles: [`h1 [front-family: Lato;}`]
})

@Component({
  selector: 'Produtos',
  template: `<h1> {{produtos}}! </h1>`,
  styles: [`h1 {font-family: Lato;}] `]


@Component({
  selector: 'familia de produtos',
  template: `<h1> {{familia de produtos}}! </h1>`,
  styles: [`h1 {front-family: Lato;}] `]
})

@Component ({
  selector: 'Empresa',
  template: `<h1> {{Empresa}}! </h1>`,
  styles: [`h1 {front-family: Lato}] `]
})

export class ABComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class ABComponent  {
  @Input() name: string;
}
export class empresa {
  @Input () name: string
}
export class cadastrase {
  @Input () name: string;
}
export class nomeE {
  @Input() name: string;
}
export class CNPJ {
  @Input() name: BigInteger;
}
export class CPF {
  @Input () name: BigInteger
}
export class email {
  @Input () name: string;
}
export class endereço {
  @Input () name: string;
}
export class senha {
  @Input () name: string;
}
export class produtos {
  @Input () name: string;
}
export class familiadeprodutos {
  @Input() name: string;
}
export class empresav {
  @Input () name: string;
}
export class contatoP {
  @Input () name: BigInteger
}
