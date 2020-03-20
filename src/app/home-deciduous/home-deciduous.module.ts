import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDeciduousPageRoutingModule } from './home-deciduous-routing.module';

import { HomeDeciduousPage } from './home-deciduous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDeciduousPageRoutingModule
  ],
  declarations: [HomeDeciduousPage]
})
export class HomeDeciduousPageModule {}
