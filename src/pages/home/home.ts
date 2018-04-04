import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';

import { ListdisplayPage } from '../listdisplay/listdisplay';
import { MenuPage } from '../menu/menu';
import { AngularFireDatabase  } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = "";
  password: string = "";
  _usersSubscription;
  users: object[] = [];

  splash = true;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, private alertCtrl: AlertController) {
      this._usersSubscription = this.db.list('/user').valueChanges().subscribe( data => {
        this.users=data;
    });
  }


  alert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
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

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
