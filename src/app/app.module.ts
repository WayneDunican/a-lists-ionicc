import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListdisplayPage } from '../pages/listdisplay/listdisplay';
import { AdditemPage } from '../pages/additem/additem';
import { SharelistPage } from '../pages/sharelist/sharelist';
import { ViewlistPage } from '../pages/viewlist/viewlist';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FilterPipe} from '../pipes/filter/filter';
import { FilterItemByIdPipe } from '../pipes/filter-item-by-id/filter-item-by-id';
import { ListService } from '../services/list-instance/list-instance.service';

import { ItemService } from '../services/item-service/item-instance.service';

var config = {
  apiKey: "AIzaSyDKlkwHPC7loGduDJkgsfgh9QtQjiM934o",
  authDomain: "angular-a-lists.firebaseapp.com",
  databaseURL: "https://angular-a-lists.firebaseio.com",
  projectId: "angular-a-lists",
  storageBucket: "angular-a-lists.appspot.com",
  messagingSenderId: "168919875083"
};

@NgModule({
  declarations: [
    MyApp,
    FilterPipe,
    FilterItemByIdPipe,
    ListdisplayPage,
    SharelistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListdisplayPage,
    SharelistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListService,
    ItemService
  ]
})
export class AppModule {}
