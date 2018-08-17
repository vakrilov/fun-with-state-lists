import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from './item.service';

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
}
