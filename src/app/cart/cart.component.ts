import { Products } from './../products';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent
{
  @Input() cartItem : Products [] = [];

  remove(cart:Products)
  {
    cart.quantity=0;
    let removeIndex = this.cartItem.findIndex(o=>o.name==cart.name);
    if(removeIndex<0)
    {

    } else
    {
      this.cartItem.splice(removeIndex,1);
    }
  }
}
