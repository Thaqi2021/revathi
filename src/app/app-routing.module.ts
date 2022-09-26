import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path :'login', component:LoginComponent},
  { path:'learn',component:LearnComponent},
  { path:'cart',component:CartComponent},
  { path:'signUp',component:SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
