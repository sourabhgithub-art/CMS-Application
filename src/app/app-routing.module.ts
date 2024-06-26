import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/services/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { UsersComponent } from './users/users.component';
import { LogoutComponent } from './logout/logout.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CmsAppComponent } from './cms-app/cms-app.component';
import { FeaturesComponent } from './features/features.component';
import { InstallationComponent } from './installation/installation.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SignUpComponent } from './new/signup.component';
import { NewcategoriesComponent } from './newcategories/newcategories.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

 {
    path: 'dashboard',
   component: IndexComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'logout', 
    component:LogoutComponent
  },

  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'categories',
    
    component: CategoriesComponent
  },

  {
    path:'new',
    component: SignUpComponent
  },
  {
    path:'introduction',
    component:IntroductionComponent
  },
  {
    path:'cms-app',
    component:CmsAppComponent
  },
  {
    path:'features',
    component:FeaturesComponent
  },
  {
    path:'intro',
    component:IntroductionComponent
  },
  {
    path:'install',
    component:InstallationComponent
  },
  {
    path:'intro',
    component:IntroductionComponent
  },
  {
    path:'advantages',
    component:AdvantagesComponent
  },
  {
    path:'',
    component:IntroductionComponent
  },
  {
    path:'newcategories',
    component:NewcategoriesComponent
  }

  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
