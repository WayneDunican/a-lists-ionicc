import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharelistPage } from './sharelist';

@NgModule({
  declarations: [
    SharelistPage,
  ],
  imports: [
    IonicPageModule.forChild(SharelistPage),
  ],
})
export class SharelistPageModule {}
