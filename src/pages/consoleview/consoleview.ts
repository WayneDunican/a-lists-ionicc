import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ListdisplayPage } from '../listdisplay/listdisplay';
import { MenuPage } from '../menu/menu';
import { AngularFireDatabase  } from 'angularfire2/database';

/**
 * Generated class for the ConsoleviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consoleview',
  templateUrl: 'consoleview.html',
})
export class ConsoleviewPage {
  
  username: string = "";
  password: string = "";
  _usersSubscription;
  users: object[] = [];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, private alertCtrl: AlertController) {
      this._usersSubscription = this.db.list('/user').valueChanges().subscribe( data => {
        this.users=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsoleviewPage');
  }

  loginUserTwo() {
    this.navCtrl.push(ListdisplayPage, {
        username: this.username
      });
    this.db.list('/user').push({
        email: this.username,
        password: this.password
      });
  }

  menuPage(){
    this.navCtrl.push(MenuPage, {
      username: this.username
    });
  }

}
