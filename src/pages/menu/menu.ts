import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdditemPage } from '../additem/additem';
import { List } from '../../models/list/list.model';
import { ListService } from '../../services/list-instance/list-instance.service';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  list: List = {
    email: '',
    listid: undefined,
    listname: '',
    sharedEmails: [""]
  }

  
  username: string = "";
  lists: object[] = [];

  constructor(private ls: ListService, public db: AngularFireDatabase, public navCtrl: NavController,
             public modal: ModalController, public navParams: NavParams, public alertCtrl: AlertController) {
      this.username = this.navParams.get('email');
   }

   addList(list: List){
     /*
        Create a new ListInstance Object

        Push this object to the db under the list-instance node.
     */
     this.ls.addList(list).then(ref => {
        this.navCtrl.pop();
     });
   }

	showAlert(title: string, message: string) {
	    		let alert = this.alertCtrl.create({
	      		title: title,
	      		subTitle: message,
	     		buttons: ['OK']
	    	});
    	alert.present();
   }



}
