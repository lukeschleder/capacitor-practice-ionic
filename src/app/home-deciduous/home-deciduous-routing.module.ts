import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDeciduousPage } from './home-deciduous.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDeciduousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDeciduousPageRoutingModule {}
