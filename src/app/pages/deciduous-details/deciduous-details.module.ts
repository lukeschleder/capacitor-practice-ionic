import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeciduousDetailsPageRoutingModule } from './deciduous-details-routing.module';

import { DeciduousDetailsPage } from './deciduous-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeciduousDetailsPageRoutingModule
  ],
  declarations: [DeciduousDetailsPage]
})
export class DeciduousDetailsPageModule {}
