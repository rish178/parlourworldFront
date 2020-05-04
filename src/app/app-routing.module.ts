import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'single-parlour-details',
    loadChildren: () => import('./single-parlour-details/single-parlour-details.module').then( m => m.SingleParlourDetailsPageModule)
  },
  {
    path: 'all-salons-page',
    loadChildren: () => import('./all-salons-page/all-salons-page.module').then( m => m.AllSalonsPagePageModule)
  },
  {
    path: 'list-your-business',
    loadChildren: () => import('./list-your-business/list-your-business.module').then( m => m.ListYourBusinessPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
