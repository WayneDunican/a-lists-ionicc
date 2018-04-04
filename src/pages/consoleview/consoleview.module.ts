import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsoleviewPage } from './consoleview';

@NgModule({
  declarations: [
    ConsoleviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsoleviewPage),
  ],
})
export class ConsoleviewPageModule {}
