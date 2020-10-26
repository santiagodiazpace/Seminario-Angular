import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
  "name": "aaa",
  "type": "Porter",
  "price": 10,
  "stock": 5,
  "image": "assets/img/porter.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
