import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TimeCountPipe } from './time-count.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubComponent,
    SearchFormComponent,
    TimeCountPipe,
    NavbarComponent,
    NotFoundComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { GithubComponent } from './github/github.component';
// import { SearchFormComponent } from './search-form/search-form.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
// import { DateCountPipe } from './date-count.pipe';
// import { FormsModule } from '@angular/forms';
// import { UserDetailsComponent } from './user-details/user-details.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { UserReposComponent } from './user-repos/user-repos.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     GithubComponent,
//     SearchFormComponent,
//     NavbarComponent,
//     HomeComponent,
//     DateCountPipe,
//     UserDetailsComponent,
//     NotFoundComponent,
//     UserReposComponent,
//   ],
//   imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
