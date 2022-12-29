import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PromptListPageComponent} from './pages/prompt-list-page/prompt-list-page.component';
import {PromptDetailPageComponent} from './pages/prompt-detail-page/prompt-detail-page.component';
import {SideNavComponent} from './components/reuseable/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { PositionListComponent } from './components/public/positions/position-list/position-list.component';
import { PositionItemComponent } from './components/public/positions/position-list/position-item/position-item.component';
import {MatCardModule} from "@angular/material/card";
import { MessageComponent } from './components/reuseable/message/message.component';
import { PageHeaderComponent } from './components/reuseable/page-header/page-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prompts', component: PromptListPageComponent},
  {path: 'home', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    PromptListPageComponent,
    PromptDetailPageComponent,
    SideNavComponent,
    PositionListComponent,
    PositionItemComponent,
    MessageComponent,
    PageHeaderComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
