import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compt/dashboard/dashboard.component';
import { LoginComponent } from './compt/login/login.component';
import { PageNotfoundComponent } from './compt/page-notfound/page-notfound.component';
import { SignupComponent } from './compt/signup/signup.component';

const routes: Routes = [ 
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:"**",component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
