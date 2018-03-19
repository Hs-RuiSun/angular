import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { ConfigComponent } from './http/config.component';
import { ConfigService } from './http/config.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true, apiBase: 'api/'})
  ],
  providers: [HeroService, ConfigService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
