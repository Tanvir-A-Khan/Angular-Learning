import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name: string = 'iPhone';
  price: number = 700;
  color: string = 'Silver';
  discount: number = 50;
  stock: number = 10;
  cart: number = 0;
  message: string = "";
  searchText: string = "";

  getDiscountedPrice(){
    return this.price - (this.discount/100 * this.price);
  }

  onChangeName(event:any) {
    console.log(event.target.value);
    this.message = event.target.value;   
  }

  onInc(){
    this.cart += 1;
    if(this.cart > this.stock){
      this.cart = this.stock;
    }
  }
  onDec(){
    this.cart -= 1;
    if(this.cart < 0){
      this.cart = 0;
    }
  }
  // onSearch(event:any) {
  //   // console.log(event.target.value);
  //   this.message=event.target.value;
  // }

}
