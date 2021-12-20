
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
//import {ElectronicsComponent} from './electronics/electronics.component'
import {ContactComponent} from './contact/contact.component';
import {NoPageFoundComponentComponent} from './no-page-found-component/no-page-found-component.component';

import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ApiService } from './service/api.service';
import { CartService } from './service/cart.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  
  //{path:'electronics',component:ElectronicsComponent, canActivate:[AuthGuardService]},
  {path:'contact',component:ContactComponent, canActivate:[AuthGuardService]},

  {path:'login',component:LoginComponent},

  {path:'signup',component:SignupComponent},
  //{path:'**',component:NoPageFoundComponentComponent},

  {path:'products',component:ProductsComponent, canActivate:[AuthGuardService]},
  {path:'cart', component:CartComponent, canActivate:[AuthGuardService]},
  {path:'header', component:HeaderComponent},
  {path:'forgot-password',component:ForgotPasswordComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
