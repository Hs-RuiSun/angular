import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./heroes/dashboard.component";
import { HeroesGetComponent } from './heroes/heroes-get.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesSearchComponent } from "./heroes/heroes-search.component";
import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from './hero.service';
import { PostComponent } from "./http/post.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesGetComponent,
    DashboardComponent,
    HeroesSearchComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: false, apiBase: 'api/'})
  ],
  providers: [HeroService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
