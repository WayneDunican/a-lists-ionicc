import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { List } from "../../models/list/list.model";

@Injectable()
export class ListService{

    private listInstanceRef = this.db.list<List>('list-instance');
    constructor(private db: AngularFireDatabase){}

    getList(){
        return this.listInstanceRef;
    }

    addList(list: List){
        return this.listInstanceRef.push(list);
    }

    updateList(list: List){
        return this.listInstanceRef.update(list.key, list);
    }

    removeList(list: List){
        return this.listInstanceRef.remove(list.key);
    }

    shareList(list: List, email: string){
        console.log(email);
        if(list.sharedEmails == undefined){
            list.sharedEmails = [];
            list.sharedEmails.push(email);
        }
        else{
            list.sharedEmails.push(email);
        }
        console.log(list);
        return this.listInstanceRef.update(list.key, list);
    }


}