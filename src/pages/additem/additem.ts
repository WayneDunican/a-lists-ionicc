import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Item } from '../../models/item/item.model';
import { ItemService } from '../../services/item-service/item-instance.service';


@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {

	
	item: Item;
	listid;

	constructor(private itSrv: ItemService, public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
		this.listid = this.navParams.get('listid');
		console.log("ListID: " + this.listid);

		this.item = {
			itemID: 0,
			listID: this.listid,
			itemName: "",
			itemPrice: undefined,
			placeOfPurchase: "",
			purchased: true,
			age: undefined
		}
	}

	addItem(item: Item){
		this.itSrv.addItem(item);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

}
