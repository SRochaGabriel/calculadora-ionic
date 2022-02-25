import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  n1: number
  n2: number
  res: number

  somar() {
    this.res = this.n1 + this.n2
  }

  subtrair() {
    this.res = this.n1 - this.n2
  }

  multiplicar() {
    this.res = this.n1 * this.n2
  }

  divisao() {
    this.res = this.n1 / this.n2
  }

}
