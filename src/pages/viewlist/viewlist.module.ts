import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewlistPage } from './viewlist';

@NgModule({
  declarations: [
    ViewlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewlistPage),
  ],
})
export class ViewlistPageModule {}
