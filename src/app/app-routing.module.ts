import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PromptListPageComponent} from "./pages/prompt-list-page/prompt-list-page.component";
import {CandidatePageComponent} from "./pages/candidate-page/candidate-page.component";
import {MyAccountPageComponent} from "./pages/my-account-page/my-account-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'logout',
    redirectTo: 'login'
  },
  {
    path: 'positions',
    canActivate: [AuthGuardService],
    component: PromptListPageComponent,
  },
  {
    path: 'candidate/:position',
    component: CandidatePageComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    component: HomePageComponent
  },
  {
    path: 'my-account',
    canActivate: [AuthGuardService],
    component: MyAccountPageComponent
  },
  {
    path: '404',
    canActivate: [AuthGuardService],
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
