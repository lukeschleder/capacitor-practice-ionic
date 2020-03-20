import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeciduousDetailsPage } from './deciduous-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeciduousDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeciduousDetailsPageRoutingModule {}
