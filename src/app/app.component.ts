

import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppComponent  {
  name = 'AUTOMACAO';
}

export class AppComponent {
  name = 'AB Automaçao';
  cnpj = 12345678;
  email = 'abautomacao@empresa.com.br';
  contato = [12345678, 9876543];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Empresa Activa';
    else
      return 'Empresa Inactiva';
  }

  ultimaentrada() {
    let suma=0;
    for(let x=0; x<this.cnpj.length; x++)
      suma+=this.cnpj[x];
    return suma;
  }
}
export class AppModule { }