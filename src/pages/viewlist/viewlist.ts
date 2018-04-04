import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController} from 'ionic-angular';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { List } from '../../models/list/list.model';
import { ListService } from '../../services/list-instance/list-instance.service';
import { Item } from '../../models/item/item.model';
import { Observable } from 'rxjs/Observable';
import { ItemService } from '../../services/item-service/item-instance.service';
import { FilterItemByIdPipe } from '../../pipes/filter-item-by-id/filter-item-by-id';

@IonicPage()

@NgModule({
  declarations: [FilterItemByIdPipe],
  imports: [FilterItemByIdPipe]
})

@Component({
  selector: 'page-viewlist',
  templateUrl: 'viewlist.html',
})
export class ViewlistPage {

  list: List;
  itemInstances$: Observable<Item[]>;
  listid: number;
  constructor(private alertCtrl: AlertController, public toastCtrl: ToastController, private itemSvc: ItemService, private ls: ListService, public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
     
    this.itemInstances$ = this.itemSvc
      .getItem()
      .snapshotChanges()
      .map(changes => {
      
        return changes.map(d => ({
          key: d.payload.key, ...d.payload.val() 
        }))
      });

      this.list = this.navParams.get('list');
      this.listid = this.list.listid;
      //this.addItem();
  }
    
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Add Items using the plus button',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  editList(list: List){
    this.ls.updateList(list).then(() => {
      console.log(list);
      this.navCtrl.pop();
    });
  }

  removeList(list: List){
    this.ls.removeList(list);
    this.navCtrl.pop();
  }

  addItem(item: Item){
    this.itemSvc.addItem(item);
  }

  closeModal(){
  	this.view.dismiss();
  }

  shareList(list: List){
    
    this.alertCtrl.create({
      title: 'Share List',
      message: "Enter email to share List with",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Share',
          handler: data => {
            this.ls.shareList(list, data.email);
            console.log(data.email);
          }
        }
      ]
    }).present();
  }


  ionViewDidLoad(){
    this.showToastWithCloseButton();
  }

}
