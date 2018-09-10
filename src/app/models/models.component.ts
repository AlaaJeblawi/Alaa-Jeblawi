import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {


  hp: Brand[] = [
    new Brand(1, "HP Pavilion Laptop - 15t touch optional2", "/assets/1.png", 400),
    new Brand(2, "HP ProBook 430", "/assets/2.png", 100),
    new Brand(3, "HP Spectre x360 Convertible Laptop - 13t touch", "/assets/3.png", 300),
    new Brand(4, "HP ENVY x360 - 15z Touch Laptop", "/assets/4.png", 600),
    new Brand(5, "HP Pavilion All-in-One - 27-r015z", "/assets/5.png", 450),
  ];

  constructor(private cart: CartService) {

  }


  ngOnInit() {

  }

  addToCart(brand: Brand) {
    this.cart.addBrand(brand);
  }
}

export class Brand {
  constructor(public id?: number,
    public name?: string,
    public img?: string,
    public price?: number) {

  }
}