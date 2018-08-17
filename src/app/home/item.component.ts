import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item.service';
import { attachViewState } from '../../view-state-utils';

interface ItemViewState {
  selected?: boolean;
}
const ItemViewStateFactory = () => { return { selected: false } };

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @attachViewState<ItemViewState>("item", ItemViewStateFactory)
  vs: ItemViewState;

  @Input() item: Item;
}
