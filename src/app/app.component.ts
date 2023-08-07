import { Component } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'csf_tut1';

  mainList : Products[] =[];
  addItem(addedItem:Products)
  {
    console.log("Output: "+addedItem.quantity);
    if(addedItem.quantity==0)
    {
      addedItem.quantity=1;
    } else
    {
      addedItem.quantity+=1;
    }

    let itemIndex = this.mainList.findIndex(o=>o.name==addedItem.name);
    if(itemIndex<0)
    {
      this.mainList.push(addedItem);
    } else
    {
      this.mainList[itemIndex]=addedItem;
    }
  }
}
