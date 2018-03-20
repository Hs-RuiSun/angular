import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesGetComponent } from './heroes-get/heroes-get.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ConfigComponent } from './http/config.component';
import { ConfigService } from './http/config.service';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesGetComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: false, apiBase: 'api/'})
  ],
  providers: [HeroService, ConfigService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
