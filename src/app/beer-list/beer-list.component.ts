import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
  {
  name: "aaa",
  type: "Porter",
  price: 10,
  stock: 5,
  image: "assets/img/porter.png",
  clearance: false,
  quantity: 0,
  },
  {
  name: "bbb",
  type: "Rubia",
  price: 10,
  stock: 3,
  image: "assets/img/porter.png",
  clearance: true,
  quantity: 0,
  },
  {
    name: "ccc",
    type: "Negra",
    price: 10,
    stock: 0,
    image: "assets/img/porter.png",
    clearance: false,
    quantity: 0,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m: string) {
    alert(m);
  }

}
