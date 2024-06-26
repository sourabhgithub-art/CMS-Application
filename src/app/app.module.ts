import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PagesComponent } from './pages/pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthService } from '../app/services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { UsersService } from '../app/services/users.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule} from '@angular/material/icon';
import { NewcategoriesComponent } from './newcategories/newcategories.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CmsAppComponent } from './cms-app/cms-app.component';
import { FeaturesComponent } from './features/features.component';
import { InstallationComponent } from './installation/installation.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SignUpComponent } from './new/signup.component';
import { EditComponent } from './edit/edit.component';
import { NewpagesComponent } from './newpages/newpages.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    NavBarComponent,
    IndexComponent,
    PagesComponent,
    CategoriesComponent,
    LogoutComponent,
    NewcategoriesComponent,
    SignUpComponent,
    IntroductionComponent,
    CmsAppComponent,
    FeaturesComponent,
    InstallationComponent,
    AdvantagesComponent,
    EditComponent,
    NewpagesComponent,
    EditPageComponent,
    FooterComponent
    
    
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
  
  ],
  providers: [AuthService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
