import { Injectable } from "@angular/core";

export interface Item {
  name: string;
}

@Injectable()
export class ItemService {

  getItems(): Item[] {
    let items = [];
    
    for (let i = 0; i < 100; i++) {
      items.push({ name: "item " + i })
    }

    return items;
  }
}
