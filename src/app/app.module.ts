import {NgModule} from '@angular/core';

// Angular modules
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// Material modules
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {PositionListComponent} from './components/public/positions/position-list/position-list.component';
import {PositionItemComponent} from './components/public/positions/position-list/position-item/position-item.component';
import {MessageComponent} from './shared/message/message.component';
import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {CandidateListComponent} from './components/public/candidate-list/candidate-list.component';

// Pages
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PromptListPageComponent} from './pages/prompt-list-page/prompt-list-page.component';
import {PromptDetailPageComponent} from './pages/prompt-detail-page/prompt-detail-page.component';
import {MyAccountPageComponent} from './pages/my-account-page/my-account-page.component';

// Services
import {AlertService} from "./services/alert/alert.service";
import {AlertComponent} from './shared/alert/alert.component';
import {CandidatePageComponent} from './pages/candidate-page/candidate-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'positions',
    component: PromptListPageComponent,
  },
  {
    path: 'candidate/:position',
    component: CandidatePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavComponent,
    PositionListComponent,
    PositionItemComponent,
    MessageComponent,
    PageHeaderComponent,
    LoginPageComponent,
    HomePageComponent,
    PromptListPageComponent,
    PromptDetailPageComponent,
    MyAccountPageComponent,
    AlertComponent,
    CandidateListComponent,
    CandidatePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
