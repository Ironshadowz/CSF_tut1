import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent
{
  cartList : Products[] =
  [
    {image:'https://clipart-library.com/img/1572331.png', name:'Bucket', quantity:0},
    {image:'https://clipart-library.com/images/BigrabB6T.gif', name:'Pail', quantity:0},
    {image:'https://clipart-library.com/data_images/181545.png', name:'Mop', quantity:0},
    {image:'https://clipart-library.com/images_k/hatchet-transparent/hatchet-transparent-16.png', name:'Axe', quantity:0}
  ]

  @Output() addToCart : EventEmitter<Products> = new EventEmitter();

  add(item:Products)
  {
    this.addToCart.emit(item);
    console.log("added to output")
    console.log(item);
  }
}
