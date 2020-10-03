import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TimeCountPipe } from './time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubComponent,
    SearchFormComponent,
    TimeCountPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
