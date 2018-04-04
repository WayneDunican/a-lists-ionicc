import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { AngularFireDatabase  } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'firebase/database';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the SharelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-sharelist',
  templateUrl: 'sharelist.html',
})
export class SharelistPage {

	listRef$: FirebaseObjectObservable<any>;
	listItem: {};

	sharedemail: string = "";
	emailForm : FormGroup;
	id: string = "";
	_listsSubscription;
  listsinstances: object[] = [];
  nav: NavParams;

  constructor(public db: AngularFireDatabase, public formBuilder : FormBuilder, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  		this.id = navParams.get("listID");

  		this.listRef$ = this.db.object(`/listinstance`);

  		/*this._listsSubscription = this.db.list('/listinstance').valueChanges().subscribe( data => {
    		this.listsinstances=data;
		});*/

		this._listsSubscription = this.listRef$.valueChanges().subscribe( data => {
    		this.listsinstances=data;
		});

  		this.emailForm = formBuilder.group({
        sharedemail : ['', Validators.required],
	   });

  }

  shareListToUser(list){

  		//this.listRef$ = this.db.object('/listinstance/' + list);
  		console.log(this.emailForm.get('sharedemail').value);
  		this._listsSubscription.update(list, {itemone: this.emailForm.get('sharedemail').value});
  }

  closeModal(){
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharelistPage');
  }

}
