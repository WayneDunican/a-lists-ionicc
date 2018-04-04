import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Pipe, PipeTransform } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';
import { FilterPipe } from '../../pipes/filter/filter';
import { FilterItemByIdPipe } from '../../pipes/filter-item-by-id/filter-item-by-id';
import { ModalController } from 'ionic-angular';
import { ViewlistPage } from '../viewlist/viewlist';
import { SharelistPage } from '../sharelist/sharelist';
import { ListService } from '../../services/list-instance/list-instance.service';
import { List } from '../../models/list/list.model';
import { Item } from '../../models/item/item.model';
import { ItemService } from '../../services/item-service/item-instance.service';

@NgModule({
  declarations: [FilterPipe],
  imports: [FilterPipe]
})

@Component({
  selector: 'page-listdisplay',
  templateUrl: 'listdisplay.html',
})
export class ListdisplayPage {

  listInstances$: Observable<List[]>;
  itemInstances$: Observable<Item[]>;
  lists;
  username: string = '';
  
  constructor(private itemSvc: ItemService, private ls: ListService, private asCtrl: ActionSheetController, public modalCtrl: ModalController, public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    
    /*
      Pointing listInstacesRef$ at Firebase -> node (list-instance)
      Push and also have access to the node contents
    */

    this.listInstances$ = this.ls
      .getList()
      .snapshotChanges()
      .map(changes => {
      
        return changes.map(d => ({
          key: d.payload.key, ...d.payload.val() 
        }))
      }); //Returns a List from AngularFireDB

      console.log("Lists " + this.listInstances$)

      this.itemInstances$ = this.itemSvc
      .getItem()
      .snapshotChanges()
      .map(changes => {
      
        return changes.map(d => ({
          key: d.payload.key, ...d.payload.val() 
        }))
      });


  }

  addItem(item: Item){
    this.itemSvc.addItem(item);
  }
}
