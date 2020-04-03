import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'welcome', component: HomeComponent },
      { path: 'login', component: SignInUpComponent },
      { path: 'register', component: SignInUpComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
