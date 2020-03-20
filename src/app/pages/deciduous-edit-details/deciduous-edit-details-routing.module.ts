import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeciduousEditDetailsPage } from './deciduous-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeciduousEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeciduousEditDetailsPageRoutingModule {}
