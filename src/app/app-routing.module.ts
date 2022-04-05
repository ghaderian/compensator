import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RequestsComponent } from './components/requests/requests.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminAuthGuard } from './core/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', 
    canActivate: [AdminAuthGuard],
    children: [
      { path: "requests", component: RequestsComponent }
    ] 
  },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
