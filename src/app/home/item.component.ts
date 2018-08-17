import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  selected: boolean = false;

  @Input() item: Item;
}
