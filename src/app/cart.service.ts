import { Injectable } from '@angular/core';
import { Brand } from './models/models.component';

@Injectable()
export class CartService {

  selections: BrandSelection[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;

  constructor() { }


  addBrand(brand: Brand) {
    let selection = this.selections
      .find(ps => ps.id == brand.id);
    if (selection) {
      selection.quantity++;
    } else {
      this.selections.push(new BrandSelection(this,
        brand.id, brand.name,brand.img,
        brand.price, 1));
    }
    this.update();
  }


  updateQuantity(id: number, quantity: number) {
    if (quantity > 0) {
      let selection = this.selections.find(ps => ps.id == id);
      if (selection) {
        selection.quantity = quantity;
      }
    } else {
      let index = this.selections.findIndex(ps => ps.id == id);
      if (index != -1) {
        this.selections.splice(index, 1);
      }
      this.update();
    }
  }


  clear() {
    this.selections = [];
    this.update();
  }


  update() {
    this.itemCount = this.selections.map(ps => ps.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    this.totalPrice = this.selections.map(ps => ps.price * ps.quantity)
      .reduce((prev, curr) => prev + curr, 0);

  }
}
export class BrandSelection {
  constructor(public cart: CartService,
    public id?: number,
    public name?: string,
    public img?: string,
    public price?: number,
    private quantityValue?: number) { }
  get quantity() {
    return this.quantityValue;
  }
  set quantity(newQuantity: number) {
    this.quantityValue = newQuantity;
    this.cart.update();
  }
}

