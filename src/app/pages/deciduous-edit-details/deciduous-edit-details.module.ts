import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeciduousEditDetailsPageRoutingModule } from './deciduous-edit-details-routing.module';

import { DeciduousEditDetailsPage } from './deciduous-edit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeciduousEditDetailsPageRoutingModule
  ],
  declarations: [DeciduousEditDetailsPage]
})
export class DeciduousEditDetailsPageModule {}
