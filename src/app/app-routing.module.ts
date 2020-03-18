import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// array of routes to different URL paths
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // path used when adding a new tree item
  {
    path: 'edit-details',
    loadChildren: () => import('./pages/edit-details/edit-details.module').then( m => m.EditDetailsPageModule)
  },
  // URL used to edit details of tree identified with id
  {
    path: 'edit-details/:id',
    loadChildren: () => import('./pages/edit-details/edit-details.module').then( m => m.EditDetailsPageModule)
  },
  // URL used to display details of one species of tree identified with id
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
