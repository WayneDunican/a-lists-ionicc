import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable()
export class ItemService{

    itemss;
    private newID: number;

    private itemInstanceRef = this.db.list<Item>('item-instance');
    constructor(private db: AngularFireDatabase){}

    getItem(){
        return this.itemInstanceRef;
    }

    addItem(item: Item){
        return this.itemInstanceRef.push(item);
    }

    updateList(item: Item){
        return this.itemInstanceRef.update(item.key, item);
    }

    removeList(item: Item){
        return this.itemInstanceRef.remove(item.key);
    }

    
    getNewID(){
        this.itemss = this.itemInstanceRef.valueChanges().toArray();
    }

}