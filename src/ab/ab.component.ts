
import { Component, OnInit } from '@angular/core';

import { Component, Input } from '@angular/core';


@Component( {
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
} )

@Component ( {
  selector : 'AB' ,
  template : `<h1> AB {{name}}! </h1>`
  styles: [ `h1 {font-family: Lato; } ` ]

})

@Component ({
  selector: 'empresav',
  template: `<h1> empresav {{empresav}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ( {
  selector: 'cadastrese'
  template: `<h1> cadastrase {{cadastrese}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
} )

@Component ({
  selector: 'nameE'
  template: `<h1> nameE {{nameE}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ({
  selector: 'CNPJ'
  template: `<h1> CNPJ {{CNPJ}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ( {
  selector: 'CPF'
  template: `<h1> CPF {{CPF}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
} )

@Component ({
  selector: 'endereço'
  template: `<h1> endereço {{endereço}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ({
   selector: 'email'
  template: `<h1> email {{email}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ({
  selector: 'senha'
  template: `<h1> senha {{senha}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
})

@Component ( {
  selector: 'produtos'
  template: `<h1> produtos {{produtos}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
} )

@Component ( {
  selector: 'familia de produtos'
  template: `<h1> familia de produtos {{familia de produtos}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
} )

@Component ( {
  selector: 'Empresa'
  template: `<h1> Empresa {{Empresa}}!, / h1>`,
  styles: [ `h1 {font-family: Lato}`]
} )

export class AbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class abComponent {
}
export class empresa{
  @Nome ( ) : string;
  }
  export class cadastrase {
  @Nome ( ) : string;
  }
export class nomeE {
  @Nome ( ) : string;
  }
export class CNPJ{
  @Nome ( : BigInteger;
  }
  export class CPF{
  @Nome ( ) : BigInteger
  }
  export class email {
  @Nome ( ) : string
  }
export class endereço {
  @Nome ( ) : string
  }
export class  senha {
  @Nome ( ) : string
  }
  export class produtos {
  @Nome ( ) : string
  }
  export class familiadeproouctos{
  @Nome ( ) : string
  }
  export empresav {
  @Nome ( ) : string
  }
  export class contato {
  @Nome ( ) : BigInteger
  }