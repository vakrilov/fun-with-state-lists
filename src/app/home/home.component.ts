import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from './item.service';
import { getViewState } from '../../view-state-utils';
import { ItemViewState } from './item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'fun-with-state-lists';
  items: Item[];

  constructor(service: ItemService) {
    this.items = service.getItems();
  }

  checkout() {
    const result = this.items
      .filter(item => {
        const vs = getViewState<ItemViewState>(item);
        return vs && vs.selected;
      })
      .map(item => item.name)
      .join("\n");
    alert("Selected items:\n" + result);
  }
}
