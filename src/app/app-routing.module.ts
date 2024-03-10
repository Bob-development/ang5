import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "",
    component: ForumComponent
  },
  {
    path: "SignUp",
    component: SignUpComponent
  },
  {
    path: "SignIn",
    component: SignInComponent
  },
  {
    path: "MyPage",
    component: ForumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
